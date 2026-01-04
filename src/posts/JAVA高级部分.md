---
icon: file
date: 2025-12-11
order: 100
category:
  - JAVA
---
# JAVA高级部分

## **多线程**

### **基本概念：程序，进程，线程**

程序(program)：为了完成某种任务的特定的静态的代码，还没有运行起来。
进程(process)：正在运行的一段程序，是资源分配的单位，系统会为每个进程分配不同的内存区域。
线程(thread)：进程进一步细化为线程，是一条程序内部的执行路径，线程是cpu调度和执行的单位，每个线程拥有独立的虚拟机运行栈和程序计数器。

方法区和堆是进程独有的，所有线程共享。

对于单核cpu来说，多线程是假的。只有多核的才能发挥多线程。

一个java程序至少三个线程，main主线程，gc垃圾回收线程，异常处理线程。

**并行与并发**

并行：多个cpu同时执行多个任务
并发：一个cpu采用时间片同时执行多个任务。

### **线程的创建和使用**

**多线程的创建，方式一：继承于Thread类**

- 创建一个继承于Thread类的子类
- 重写run方法
	- 如果直接调用run 那么不会有新线程，只会在main线程内顺序执行。
- 实例化子类
- 调用start方法
	- 作用（启动线程 调用线程的run方法）
	- 如果同一个实例调用多次start 会报异常。一个实例只能调用一次start

```java
public class Test12 {  
    public static void main(String[] args) {  
        MyThread myThread = new MyThread();  
        myThread.start();  
        for (int i = 0; i < 100; i++) {  
            if (i % 2 == 0) {  
                System.out.println("Main Thread Print"+i);  
            }  
        }  
    }  
}  
  
class MyThread extends Thread {  
  
    @Override  
    public void run() {  
        // 输出100以内的所有偶数  
        for (int i = 0; i < 100; i++) {  
            if (i % 2 == 0) {  
                System.out.println("new Thread Print"+i);  
            }  
        }  
    }  
}
```
这里俩个线程交替执行 打印混杂在一起

**例题：多窗口卖票**

多个窗口卖票，在没有学习同步的情况下，我们能想到最优的解法就是将票的总数设置为静态变量，为类共享可以使得三个线程不会卖出多余的票。
```java
public class MaiPiao {  
    public static void main(String[] args) {  
        Thread window1 = new Window();  
        window1.setName("窗口1");  
        Thread window2 = new Window();  
        window2.setName("窗口2");  
        Thread window3 = new Window();  
        window3.setName("窗口3");  
        window1.start();  
        window2.start();  
        window3.start();  
    }  
  
}  
  
class Window extends Thread {  
    private static int num = 100;  
  
    @Override  
    public void run() {  
        while (true) {  
            if (num > 0) {  
                System.out.println(Thread.currentThread().getName() + "窗口卖了第" + num + "号票");  
                num--;  
            }  
            if (num == 0) {  
                break;  
            }  
        }  
    }  
}
```

static也无法严格的保证多线程安全

窗口3窗口卖了第100号票
窗口3窗口卖了第99号票
窗口3窗口卖了第98号票
窗口3窗口卖了第97号票
窗口3窗口卖了第96号票
窗口1窗口卖了第100号票
窗口1窗口卖了第94号票
窗口1窗口卖了第93号票
...

**Thread的匿名子类**

```java
new Thread("线程2"){  
    @Override  
    public void run() {  
        // 输出100以内的所有偶数  
        for (int i = 0; i < 100; i++) {  
            if (i % 2 == 0) {  
                System.out.println("匿名 Thread Print" + i);  
            }  
        }  
    }  
}.start();

```

**多线程的创建，方式二：实现Runnable接口**

**步骤**

1. 创建一个实现了Runnable接口的类
2. 实现类的抽象方法 run()
3. 创建实现类的对象
4. 将此对象作为参数传递到Thread累的构造器中，创建Thread累的对象
5. 通过Thread类的对象调用start()方法

**源码解释**
为什么都是调用start 既可以支持方式一又可以支持方式二呢。答案在run的源码里

> **源码**
>
> ```java
> 
> /**  
>  * If this thread was constructed using a separate * <code>Runnable</code> run object, then that * <code>Runnable</code> object's <code>run</code> method is called; * otherwise, this method does nothing and returns. * <p>  
>  * Subclasses of <code>Thread</code> should override this method. * * @see     #start() * @see     #stop() * @see     #Thread(ThreadGroup, Runnable, String)  
>  */@Override  
> public void run() {  
>     if (target != null) {  
>         target.run();  
>     }  
> }
> 
> ```
> 这里如果Thread的子类重写了run方法，就直接调用子类run 。而如果没有重写，Thread构造器又传入了Runnable的实现类，这里target就不为空，就会调用target的run方法。

**举例**
```java
public class shixianRunnable {  
    public static void main(String[] args) {  
        Runnable runnable = new MyRunnable();  
        Thread thread = new Thread(runnable);  
        Thread thread2 = new Thread(runnable);  
        thread.start();  
        thread2.start();  
    }  
}  
class MyRunnable implements Runnable{  
    @Override  
    public void run() {  
        for (int i = 0; i < 100; i++) {  
            if(i%2==0){  
                System.out.println(Thread.currentThread().getName()+"   "+i);  
            }  
        }  
    }  
}

```

**比较创建线程的俩种方式**

开发中优先使用Runnable的方式
原因：
- 实现的方式没有单继承的局限性
- 实现更适合于多个线程有共享的数据的模式

因为继承每创建一个线程，都要new一个实例；而实现只需要new 一个实现类，将这个实现类可以复用到多个Thread实例中，这样的话Thread为了保证数据是同一个需要加static 而Runable里就不需要，因为只new一个。

```java
Thread window1 = new Window();  
window1.setName("窗口1");  
Thread window2 = new Window();  
window2.setName("窗口2");  
Thread window3 = new Window();  
window3.setName("窗口3");

和

Runnable runnable = new MyRunnable();  
Thread thread = new Thread(runnable);  
Thread thread2 = new Thread(runnable);  
thread.start();  
thread2.start();  
thread2.run();
```

### **Thread类的有关方法**

- start 启动当前线程，调用当前线程run
- run
- currentThread 静态方法 返回执行当前代码的线程
- setName 设置线程名称
- getName 获取线程名称
- yield 释放当前cpu的执行权 不一定有效

```java
class MyThread extends Thread {  
  
    @Override  
    public void run() {  
        // 输出100以内的所有偶数  
        for (int i = 0; i < 100; i++) {  
            if (i % 2 == 0) {  
                System.out.println(Thread.currentThread().getName() + i);  
            }  
            if (i % 20 == 0) {  
                Thread.yield();  // 这里指的是当前线程 
            }  
        }  
    }  
}

```
Thread.yield(); 静态方法在哪里调用就在哪个线程下生效。



- join 在线程A中调用线程B的join方法，现场A就进入阻塞状态，知道线程B完全执行完以后，A才结束阻塞状态。

```java
package org.example;  
  
public class Test12 {  
    public static void main(String[] args) throws InterruptedException {  
        MyThread myThread = new MyThread();  
        myThread.start();  
        Thread.currentThread().setName("主线程  ");  
        myThread.setName("线程1  ");  
        for (int i = 0; i < 100; i++) {  
            if (i % 2 == 0) {  
                System.out.println(Thread.currentThread().getName() + i);  
            }  
            if (i == 20) {  
                myThread.join();  // 在主线程调用分线程的join方法，会让主线程在打印到20的时候执行分线程，并且直到分线程执行完毕才会继续执行主线程。
            }  
        }  
    }  
}  
  
class MyThread extends Thread {  
  
    @Override  
    public void run() {  
        // 输出100以内的所有偶数  
        for (int i = 0; i < 100; i++) {  
            if (i % 2 == 0) {  
                System.out.println(Thread.currentThread().getName() + i);  
            }  
            if (i % 20 == 0) {  
                this.yield();  
            }  
        }  
    }  
}

```
非静态方法，必须得用其他线程的对象调用。



- sleep

sleep是静态方法，在哪里执行就在哪里阻塞线程。 如果使用某个Thread对象调用并不会阻塞该线程。
阻塞线程，让出时间片，时间结束线程进入就绪状态 不释放锁，不一定轮到该线程。



- isAlive

myThread.isAlive()
非静态方法，判断线程是否存活



- wait

线程进入阻塞状态，释放锁。

### **线程的调度**

**调度策略**
	- 时间片
	- 抢占式：高优先级的线程抢占cpu
**java的调度方法**
	同优先级线程组成先进先出队列，使用时间片
	高优先级是有优先调度的抢占式策略。
**线程的优先级**
```java
public final static int MIN_PRIORITY = 1;  
public final static int NORM_PRIORITY = 5;  
public final static int MAX_PRIORITY = 10;
```

**设置线程的优先级**
	myThread.setPriority(2);  
	myThread.getPriority();
**说明**
线程创建是继承父线程的优先级
优先级不绝对有用。
	

## Lambda

**概念**

对某些匿名内部类的写法优化，特点是可推导可省略。**基本格式：(参数列表) -> {代码}**。

- 例如：

```java
        new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("运行线程");
            }
        }).start();
```

就可以优化为

```java
new Thread(() -> System.out.println("运行线程")).start();
```

优化规则可以不记，使用Idea快捷键Alt+Enter可以自动优化写法。

## Stream 流

### 概述

java8的Stream使用的是函数式编程，可以对集合或者数组进行==链状流式==的操作。

### 常用操作

#### 创建流

- 单列集合：集合对象.stream()。**实际开发用的最多**
- 数组对象：Arrays.stream(数组)或者Stream.of(数组)
- 双列集合：转换成单列集合后在创建流。例如：

```java
        HashMap<String, String> map = new HashMap<>();
        map.put("a","A");
        map.put("b","B");
        map.put("c","C");
        Stream<Map.Entry<String, String>> stream = map.entrySet().stream();
```

流对象的泛型对象就是集合的泛型对象

#### 中间操作

中间操作执行后仍然返回Stream流对象本身。

**filter**

过滤操作，符合条件才能保留在流当中。

```java
        List<String> list = new ArrayList<>();
        list.add("a");
        list.add("b");
        list.add("c");
        list.stream().filter((item) -> item.startsWith("a")).forEach((item) -> System.out.println(item));// a开头的才能留在流当中
```

输出结果：

> abc
> acd

**map**

对流当中的元素计算或者转换。

```java
        List<String> list = new ArrayList<>();
        list.add("abc");
        list.add("bcd");
        list.add("acd");
        list.stream().map(item->item.toCharArray()).forEach(item-> System.out.println(item.length));//String转换成char数组
        list.stream().map(s->s+"**").forEach(s-> System.out.println(s));//每个元素增加**

```

输出：

> 3
> 3
> 3
> abc**
> bcd**
> acd**

- 如果遇到数据量很大的自动装箱操作可以使用maptoint等方法.直接转换为IntStream流.

**distinct**

去重：需要流当中的元素重写hashCode和equals方法。

```java
        List<String> list = new ArrayList<>();
        list.add("abc");
        list.add("bcd");
        list.add("acd");
        list.add("acd");
        list.stream().distinct().forEach(s-> System.out.println(s));//输出：abc bcd acd
```

**sorted**

对流中的元素排序：**该方法俩个重载方法可以在sorted中通过入参匿名内部类定义比较 也可以流中的元素本身实现Comparator接口**

```java
        List<String> list = new ArrayList<>();
        list.add("abc");
        list.add("bcd");
        list.add("acd");
        list.add("acd");
        list.stream().sorted().forEach(s-> System.out.println(s));
```

**limit**

设置流的最大长度，超出部分将被抛弃。

**skip**

 跳过流的前n和元素，在返回后面所有元素。

- 组合技：limit和skip实现分页

```java
        int pageSize = 10;
        int pageIndex = 7;

        List<Integer> expected = Arrays.asList(61, 62, 63, 64, 65, 66, 67, 68, 69, 70);
        List<Integer> result = Stream.iterate(1, i -> i + 1)
                .skip((pageIndex - 1) * pageSize)
                .limit(pageSize)
                .collect(Collectors.toList());

        assertEquals(expected, result);
```

**flatmap**

与map不同的是，flatmap可以把一个对象转换成多个对象作为流当中的元素。

```java
package org.example;

import java.util.*;

public class Main {
    public static void main(String[] args) {

        List<String> list = new ArrayList<>();
        list.add("张三");
        list.add("mike");
        ArrayList<User> userArrayList = new ArrayList<>();
        userArrayList.add(new User(1, list));
        userArrayList.add(new User(2, list));
        // 要求输出userArrayList里边所有人的所有名字
        userArrayList.stream()
                .flatMap(user -> user.name.stream())
                .forEach(name -> System.out.println(name));
    }
}

class User {
    public User(int age, List<String> name) {
        this.age = age;
        this.name = name;
    }

    public int age;
    public List<String> name;
}
```



![image-20230928215055293](https://raw.githubusercontent.com/zhangyao1999/photo_gallery/main/img/image-20230928215055293.png)

**parallel**

转换为串行流,可以用peek方法来打印查看数据被哪个线程处理.

- 也可以通过parallelStream 方法直接获取串行流.

#### 终结操作

执行终结操作后链式编程结束，遍历或者返回一个对象。

**forEach**

遍历流本身。

**count**

计算流的size。

**max和min**

流当中的最值，比较同sort方法的使用。

**collect**

把当前流转换成一个集合。

- 转换成list

collect 方法的入参直接使用Collectors就可以。

```java
package org.example;

import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {

        List<String> list = new ArrayList<>();
        list.add("张三");
        list.add("mike");
        ArrayList<User> userArrayList = new ArrayList<>();
        userArrayList.add(new User(1, list));
        userArrayList.add(new User(2, list));
        // 要求转换成list<name>
        List<String> names = userArrayList.stream()
                .flatMap(user -> user.name.stream())
                .collect(Collectors.toList());
        

    }
}

class User {
    public User(int age, List<String> name) {
        this.age = age;
        this.name = name;
    }

    public int age;
    public List<String> name;
}
```

- 转换成map

```java
package org.example;

import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {

        List<String> list = new ArrayList<>();
        list.add("张三");
        list.add("mike");
        ArrayList<User> userArrayList = new ArrayList<>();
        userArrayList.add(new User(1, list));
        userArrayList.add(new User(2, list));
        // 要求转换成map<age,names>
        Map<Integer, List<String>> collect = userArrayList.stream()
                .collect(Collectors.toMap(user -> user.age, user -> user.name));
    }
}

class User {
    public User(int age, List<String> name) {
        this.age = age;
        this.name = name;
    }

    public int age;
    public List<String> name;
}
```

**查找匹配操作**

顾名思义 推一举三即可

- anyMatch 是否匹配



<img src="https://raw.githubusercontent.com/zhangyao1999/photo_gallery/main/img/image-20230928215110355-20250921212801601.png" alt="image-20230928215110355" style="zoom:50%;" />

- allMatch
- noneMatch
- findAny（随机获取一个元素）

- findFirst（获取第一个元素）

**reduce（归并）**

对流中的数据按照自定义的方式累计计算得出一个结果。

具体方式是：



<img src="https://raw.githubusercontent.com/zhangyao1999/photo_gallery/main/img/2932861-20230815225907798-666803987.png" alt="image" style="zoom:50%;" />

```java
package org.example;

import java.util.*;
import java.util.function.BinaryOperator;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {

        List<String> list = new ArrayList<>();
        list.add("张三");
        list.add("mike");
        ArrayList<User> userArrayList = new ArrayList<>();
        userArrayList.add(new User(1, list));
        userArrayList.add(new User(2, list));
        // 计算累计年龄
        Integer reduce = userArrayList.stream().map(user -> user.age)
                .reduce(0, new BinaryOperator<Integer>() {
                    @Override
                    public Integer apply(Integer result, Integer item) {
                        return result + item;
                    }
                });
      
              Integer reduce = userArrayList.stream().map(user -> user.age)
                .reduce(0, (result, item) -> result + item);//简略写法

    }
}

class User {
    public User(int age, List<String> name) {
        this.age = age;
        this.name = name;
    }

    public int age;
    public List<String> name;
}
```

![2932861-20230815230958209-725266597](https://raw.githubusercontent.com/zhangyao1999/photo_gallery/main/img/2932861-20230815230958209-725266597.png)



### 注意

- 惰性求值：没有终结操作，中间操作不会执行。
- 流是一次性的，只能使用一次终结操作，第二次会报错。
- 流不会影响原来的数据，这也是我们所期望的。

> 学习up主三更草堂的[视频](https://www.bilibili.com/video/BV1Gh41187uR)记录的笔记。





## Optional

### 概述

大量的业务代码中有很多关于非空的判断，显得代码臃肿不堪，且程序员经常忘记这一操作。使用Optional可以避免空指针异常。并且很多函数式编程的API中也用到了Optional。
<!-- more -->

### 封装和消费

```java
package org.example;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Optional<User> userOptional = User.getUserOptional();// 获取Optional封装的User
        userOptional.ifPresent(user -> System.out.println(user.age));// 消费（如果User是Null 不会执行）
    }
}

class User {
    public User(int age, List<String> name) {
        this.age = age;
        this.name = name;
    }

    public int age;
    public List<String> name;
    
    public static Optional<User> getUserOptional(){
        List<String> list = new ArrayList<>();
        list.add("张三");
        list.add("mike");
        User user = new User(1, list);
        return Optional.ofNullable(user);// 封装User到Optional里
    }
}
```

### 获取值

orElseGet

`User user = optional.orElseGet(() -> new User());`

安全的获取值 如果option里的值是null 那么就会new User()来返回

 orElseThrow

`User user1 = optional.orElseThrow((Supplier<Throwable>) () -> new RuntimeException("null"));`

安全的获取值 如果option里的值是null 那么就会抛出异常

### 数据类型转换

map方法对数据类型转换

## 函数式接口概述

只有一个抽象方法(default不算)的接口称为函数式接口.通常有注解:@FunctionalInterface进行标识.

## 方法引用

只有在lambda表达式总发现方法体只有一行代码就可以简化写法;

例如: lambda的三层简化写法

```java
        new ArrayList<String>().stream().map(new Function<String, Integer>() {
            @Override
            public Integer apply(String s) {
                return Integer.valueOf(s);
            }
        }).forEach(new Consumer<Integer>() {
            @Override
            public void accept(Integer i) {
                System.out.println(i);
            }
        });
        new ArrayList<String>().stream().map(s -> Integer.valueOf(s)).forEach(i -> System.out.println(i));
        new ArrayList<String>().stream().map(Integer::valueOf).forEach(System.out::println)
//上面三个等效
```

可以看到格式就是**类::方法**

- 构造器方法也可以这么使用格式是类名::new
