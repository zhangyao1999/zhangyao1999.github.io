---
icon: file
date: 2025-12-11
category:
  - JAVA
tag:
  - 高級特性
  - Lambda
  - Stream
---
# Lambda和Stream流

## Lambda 表达式

### 概念

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

##### filter

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

##### map

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

##### distinct

去重：需要流当中的元素重写hashCode和equals方法。

```java
        List<String> list = new ArrayList<>();
        list.add("abc");
        list.add("bcd");
        list.add("acd");
        list.add("acd");
        list.stream().distinct().forEach(s-> System.out.println(s));//输出：abc bcd acd
```

##### sorted

对流中的元素排序：**该方法俩个重载方法可以在sorted中通过入参匿名内部类定义比较 也可以流中的元素本身实现Comparator接口**

```java
        List<String> list = new ArrayList<>();
        list.add("abc");
        list.add("bcd");
        list.add("acd");
        list.add("acd");
        list.stream().sorted().forEach(s-> System.out.println(s));
```

##### limit 

设置流的最大长度，超出部分将被抛弃。

##### skip

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

##### flatmap

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

##### parallel

转换为串行流,可以用peek方法来打印查看数据被哪个线程处理.

- 也可以通过parallelStream 方法直接获取串行流.

#### 终结操作

执行终结操作后链式编程结束，遍历或者返回一个对象。

##### forEach

遍历流本身。

##### count

计算流的size。

##### max和min

流当中的最值，比较同sort方法的使用。

##### collect

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

##### 查找匹配操作

顾名思义 推一举三即可

- anyMatch 是否匹配



<img src="https://raw.githubusercontent.com/zhangyao1999/photo_gallery/main/img/image-20230928215110355-20250921212801601.png" alt="image-20230928215110355" style="zoom:50%;" />

- allMatch
- noneMatch
- findAny（随机获取一个元素）

- findFirst（获取第一个元素）

##### reduce（归并）

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

