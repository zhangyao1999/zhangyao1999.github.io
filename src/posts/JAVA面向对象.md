---
icon: file
date: 2025-12-11
category:
  - JAVA
tag:
  - 高級特性
  - 
  - 
  - 
  - 
  - 
  - 
  - 
---

# JAVA面向对象



## 面向对象-类与类的成员

### 属性

#### 属性别名

- 属性 = 成员变量 = field = 域 / 字段 。

#### 属性和局部变量的区别

- 属性
	- 定义在类的一对{}内。
	- 可以使用权限修饰符修饰
	- 有默认初始化值。
- 局部变量
	- 声明在方法内，方法形参，代码块内，构造器形参，构造器内部。
	- [不可以使用权限修饰符]()。 
	- 没有默认初始化值。

#### 默认初始化值

- 整形默认为0。
- 浮点型默认为0.0
- 字符型默认为0或者是`\u0000`
- 布尔型默认为false
- 引用数据类型默认为null

#### 属性初始化过程

- 默认初始化
- 显示初始化
- 构造器中赋值
-----------------上面都是对象构造之前的操作 只执行一次
- 对象.属性或者对象.方法赋值

### 方法

- 方法 = 函数 = 成员方法 = method。
- 方法的声明：
	- 权限修饰符  返回值类型  方法名  （  形参列表  ） {
	      }

#### 方法的重载

- 同一个类中，允许同名的方法存在，条件就是参数个数或者类型不同。（与返回类型无关）。
- 可以概括为俩同一不同：同一个类 同一个方法名。参数列表不同或者参数个数不同。  
- 也就是说同一个类中，如果方法名相同（不管返回值或者权限修饰符不同），则参数列表或者个数必须不同，否则报错类中有重复的方法。
- Java的重载是可以包括父类和子类的，即子类可以重载父类的同名不同参数的方法。

#### 重载方法的调用顺序

- 重载方法会用到自动类型提升，例如
```java  
public class OverLoad {
    public static void main(String[] args) {
        OverLoad overLoad = new OverLoad();
        // 这里传递了俩个int 值,把对于的方法注释掉后不会报错,会自动类型提升
        // 为double来调用另一个方法.
        overLoad.method(1,1);

    }
//    public void method (int i, int j){
//        System.out.println(1);
//    }
    public void method (double i, double j){
        System.out.println(2);
    }
}
```

#### 可变形参的方法

java5.0之后引入了 varargs机制，允许直接定义可以能和多个实参匹配的形参，以一种更简单的方式来传递个数可变的形参。

- 可变参数必须放在最后一位/只可以有一个可变参数。（编译器容易晕）

```java
public class Varargs {
    public static void main(String[] args) {
        Varargs varargs = new Varargs();
        varargs.method(1, new String[]{"1", "2", "3"});
        varargs.method1(1, "2", "3", "4");
        // 新老写法的区别就在于调用方式 一个需要显示的传入数组，另一个则只需要依次放入数组元素
    }

    public void method(int i, String[] args) {
        // jdk 5.0之前
    }

    public void method1(int i, String... args) {
        // jdk 5.0之后
        // 这俩方法不可以同时存在,构不成重载
    }
}

```

#### 方法的值传递机制

java的参数只有一种传递机制：==值传递==。
	对于基本数据类型，拷贝==数据值==给形参。     
	对于引用数据类型，拷贝==引用地址值==给形参。
- 特别的我们知道String作为形参，方法内部修改并不会传递到外部。原因是在于String底层维护一个final数组，每次对String进行修改都会new 一个新的String实例，所以在方法内部修改String 只是给形参指向的实例修改到了一个新的实例，不会对原来的入参有影响。
	 ![String传值](https://raw.githubusercontent.com/zhangyao1999/photo_gallery/main/img/20251211233036907.jpg)

#### 递归方法

方法调用自身，但是我们在写递归是一定要朝着已知的方向递归。否则就成了死循环。
```java
    // 递归计算获取0-100的和
    public int getSum (int i){
        if (i == 1){
            return 1;// 已知getSum（1）=1
        }
        return i+getSum(i-1); // i-1就是向着已知的方向递归。
    }
```



### 构造器

- 如果没有写任何一个构造器方法，系统会默认提供一个空参的构造器。但是一但自己写了构造器就应该把空参的构造出来，此时系统不在提供构造器，若恰好有子类继承改类，会默认调用空参构造器，找不到就会报错。
- 构造器格式：权限修饰符 类名 （形参列表）{}   **没有返回值**
- 类内部调用构造器使用this(形参列表) 来调用
- 父子类的构造器super

**super调用构造器**

- 可以在子类里用super显示的调用父类的属性或者方法   （因为子类运行起来默认都是用子类重写的方法）
- 如果是父类独有的可以省略super 如果重名可以用super指定
- 构造器
  - super（形参列表） 可以调用父类的构造器 必须在子类的构造器首行
  - (与this(形参列表)有冲突 只能二选一)。
  - 如果不写 默认是super(); 
  - 由上可知 子类的构造器的第一行只有三种情况（this(...) super(...) super() 而this（...） 也只有这三种情况 最终this无法一直互相调用 会形成递归 所以如果有n个构造器 则最多n-1个构造器调用this(...) 至少有一个调用super(...)） 子类一定会调用父类的构造器

### 代码块

作用：用来初始化类，对象
**使用**

- 如果被修饰，只能用static 。也就是说只有静态代码块和构造代码块（类中）和普通代码块（方法中）。

**执行顺序**

静态代码块>构造代码块>构造函数>普通代码块

**父类和子类执行顺序**
先父后子 静态代码块内容先执行，接着执行父类构造代码块和构造方法，然后执行子类构造代码块和构造方法。

#### 静态代码块

格式：在java类中，使用static修饰{}。只能调用静态的结构。

```java
static {  
    System.out.println("静态代码块");  
}
```

**执行时机**:静态代码块在类被加载的时候就运行了，而且只运行一次，并且优先于**各种代码块以及构造函数**。如果一个类中有多个静态代码块，会按照书写顺序依次执行。

**作用**:例如项目启动需要加载的配置文件等资源，可以放入静态代码块中。

#### 构造代码块

格式：在类中，使用{}声明。
```java
{  
    System.out.println("构造代码块");  
}
```
**执行时机**:　构造代码块在创建对象时被调用，每次创建对象都会调用一次，但是优先于构造函数执行。需要注意的是，听名字我们就知道，构造代码块不是优先于构造函数执行，而是依托于构造函数，也就是说，如果你不实例化对象，构造代码块是不会执行的。如果存在多个构造代码块，则执行顺序按照书写顺序依次执行。
**作用**:构造函数的作用类似，都能对对象进行初始化，并且只要创建一个对象，构造代码块都会执行一次。但是反过来，构造函数则不一定每个对象建立时都执行（多个构造函数情况下，建立对象时传入的参数不同则初始化使用对应的构造函数）。做诸如统计创建对象的次数等功能

#### 普通代码块

普通代码块和构造代码块的区别是，构造代码块是在类中定义的，而普通代码块是在方法体中定义的。且普通代码块的执行顺序和书写顺序一致。

### 内部类

 内部类分为成员内部类（静态和非静态）和局部内部类（方法内 代码块内 构造器内）
```java
class AA {  
      
  
    class BB {  
  
    }  
  
    static class FF {  
  
    }  
  
    public void method() {  
        class CC {  
  
        }  
    }  
  
    {  
        class DD {  
  
        }  
    }  
  
    public AA() {  
        class EE {  
  
        }  
    }  
}
```

- 内部类的方法里边可以直接调用外部类的方法 同样适用于静态规则
	- 调用方式 `method()或者外部类名.this.method();`   属性也是一样
- 内部类可以被权限修饰符修饰。

**实例化内部类**

- 实例化静态内部类
	`AA.FF ff = new AA.FF();`

- 实例化非静态内部类
	`AA a = new AA();  AA.BB bb = a.new BB();`

**使用举例**
局部内部类：
```java
public class Study {  
    public Comparable getComparable (){  
        class MyComparable implements Comparable{  
  
            @Override  
            public int compareTo(Object o) {  
                return 0;  
            }  
        }  
        return new MyComparable();  
    }  
    public Comparable getComparable2 (){  
        return new Comparable(){  
  
            @Override  
            public int compareTo(Object o) {  
                return 0;  
            }  
        };  
    }  
}
```

```java
public class Study {  
   public void method (){  
       String name = "123";  
       class BB{  
           public void userName(){  
               System.out.println(name); // 局部内部类的方法中使用外层方法的局部变量 要求该局部变量必须是final的 jdk8可以省略 但实际也是final的  
           }  
       }  
   }  
}
```

## 面向对象-三大特征

### 封装

**为什么需要封装**
开发时不需要了解类内部具体的实现，只使用少量的接口完成工作。这就需要我们隐藏类内部复杂的具体实现，只对外提供简单的接口。（高内聚，低耦合的含义就是上俩句话）

- 通过权限修饰符来实现的

**权限修饰符**

- java规定了四种权限修饰符（从小到大 ）
	- private 只在类内部可以访问
	- default（缺省） 类内部和同一个包可以访问
	- protect 类内部和同一个包以及不同包的子类可以访问
	- public 所有可以访问
- 这四种权限都可以修饰类的内部结构：属性，方法，构造器，内部类
- 但是修饰类只能用public 和 default  

### 继承

- 子类继承父类后，获得父类的属性，方法。（即使父类属性由private修饰 子类也继承到了 只是无法直接调用）
```java
public class Test2 {
    public static void main(String[] args) {
        Student student = new Student();
        //student.age = 1;// 这里没法直接调用 但是还是继承到了 下边可以使用
        student.setAge(1);
        System.out.println(student.getAge());
    }
}
class Student extends Person{

}
class Person{
    private int age;
    public void setAge(int age){
        this.age = age;
    }
    public int getAge(){
        return this.age;
    }
}
```
- 单继承多实现
- 同名属性不存在重写 会有俩个属性 可以用this 和super区分调用
- 在父类的方法1里调用父类的方法2 如果方法2被子类重写 在new 子类 调用方法1时会调用子类的方法2 

**方法的重写**

要求：

子类和父类的方法名称相同 ，形参列表相同 。 才能重写

子类的返回值类型不能大于父类

> 		父类的返回值为void 子类也必须是void

> 		父类的返回值是类 子类是该类或者该类的子类

> 		父类的返回值是基本数据类型 子类只能是该基本数据类型

```java
    public Object eat(){
        System.out.println(" person eat");
        return new Object();
    }
    // 这是父类的方法
        public String eat(){
        System.out.println(" student eat");
        return "123";
    }
    // 这是子类的方法 string是object的子类 
    // 调用时：
	Person p1 = new Student();
	Object eat = p1.eat(); // 编译时为object 运行时为string
	if(eat instanceof String){
		String s = (String) eat;
		System.out.println(s); // 输出123
	}
        
```

子类的权限必须不能小于父类

子类不能重写private的方法（不报错 但是不是重写 父类私有的 子类都看不到 何谈重写）

子类抛出的异常不能大于父类（why有这种规定）自然的，父类没有抛异常，子类也不能抛。

> 设想当我们在使用多态时，父类的方法规定抛出IOException, 我们使用try catch( IOException e)解决这一问题 ， 这时子类的方法若抛出IOException的子类，那代码仍然可以正常运行，如果可以抛出其他更大的异常，则代码就报错了。

静态的不能被重写 子类和父类同名同参数要么都是static （非重写） 要么都不是static（重写）

>总结就是，除了权限可以更开放，其他只能更小。

**重载和重写的区别**

- 细节 
	- 重载，相同方法名，形参列表不同
	- 重写是字父类，同名同形参。子类的重写 权限修饰符只能大于等于父类的。其他像返回值，异常只能小于父类的。
- 从编译和运行的角度看
	- 重载，是指允许存在多个同名方法，而这些方法的参数不同。编译器根据方法不同的参数表，对同名法的名称做修饰。对于编译器而言，这些同名方法就成了不同的方法。它们的调用地址在编译期就绑定了。**Java的重载是可以包括父类和子类的，即子类可以重载父类的同名不同参数的方法**。
	- 所以：对于重载而言，在方法调用之前，编译器就已经确定了所要调用的方法，这称为“早绑定”或“静态绑定”
	- 而对于多态，只有等到方法调用的那一刻，解释运行器才会确定所要调用的具体方法这称为“晚绑定”或“动态绑定 ”
	- 引用一句Bruce Eckell的话：“不要犯傻，如果它不是晚绑定，它就不是多态。

### **多态**

父类的引用指向子类的对象。`Father o = new Sun();` 

**多态使用注意**

Father中有什么方法，o能调什么方法。Sun特有的不能调用。

调到的方法如果是Sun重写过的，执行时是子类的重写方法。（虚拟方法调用）

一句话：编译看左边，执行看右边。代码例子：

```java
public class DuoTai {  
    public static void main(String[] args) {  
        /*  
        这里考察多态对于方法来说是编译看左边，运行看右边  
        而多态调用属性则是都看右边        
        而多态在方法里调用属性时 方法依然遵循上面，而方法里的属性则是就近原则，优先用当前类里的  
         */        
        Son son = new Son();  
        System.out.println(son.age); // 我的年龄是10  
        son.talk();// 10  
        Father father = son;  
        System.out.println(father == son);  
        System.out.println(father.age); // 40  
        father.talk();// 我的年龄是10  
    }  
}  
  
class Father {  
    public int age = 40; // 父类子类同名属性  
  
    public void talk() {  
        System.out.println("我的年龄是" + this.age);  
    }  
}  
  
class Son extends Father {  
    public int age = 10;  
  
    public void talk() {  
        System.out.println("我的年龄是" + this.age);  
    }  
}
```

> 对象的多态性只适用于方法，不适用于属性。属性的编译和运行都看左边。

**多态配合map使用举例**

```java
package com.zy;

import java.util.HashMap;

public class DuoTai {
    public static void main(String[] args) {
        HashMap<String, Customer> logic = new HashMap<>();
        logic.put("GrpCustomer", new GrpCustomer());
        logic.put("PerCustomer", new PerCustomer());
        args = new String[]{"GrpCustomer", "PerCustomer", "Other"};
        DuoTai duoTai = new DuoTai();
        for (int i = 0; i < args.length; i++) {
            duoTai.method(logic.getOrDefault(args[i], new Customer()));
        }
    }
    public void method(Customer customer) { // 这里就是多态用法父类的引用指向子类实例
        customer.SignIn();
        customer.QryInfo();
    }
}

class Customer {
    public void SignIn() {System.out.println("登陆");}
    public void QryInfo() {System.out.println("查询信息");}
}
class GrpCustomer extends Customer {
    public void SignIn() {System.out.println("集团客户登录");}
    public void QryInfo() {System.out.println("查询集团客户信息");}
}

class PerCustomer extends Customer { 
    public void SignIn() {System.out.println("个人客户登录");}
    public void QryInfo() {System.out.println("查询个人客户信息");}
}
```

**多态中向下转型调用子类方法**

`Father o = new Sun();` 在使用多态时，o无法调用子类的方法，属性。编译时o是Father类型。

使用instanceof 判断  判断子类为true 则父类也为true 一直到Object。 不判断可能出现calsscastexception

**自动类型提升，强制类型转换**

- 对于基本数据类型

	double 比 int更高级 int可以直接赋值给double 称为自动类型提升，而double想转成int则必须（int）进行强制类型转换。

- 对于引用数据类型

	向上转型就是多态，向下转型就是instanceof先判断后强转。

> 两者是一个概念。

**问题**：多态是编译时行为，还是运行时行为。

https://www.cnblogs.com/moreLuo/articles/14856221.html



---
icon: file
date: 2025-12-11
order: 11
category:
  - JAVA
tag:
  - 面向对象
  - 属性
  - 方法
  - 构造器
  - 代码块
  - 内部类


---

## 面向对象-关键字

### this

- 通常省略 除非形参和属性同名 需要显示的指定为属性
- 可以用来修饰属性 方法 构造器

### **super**

可以在子类里用super显示的调用父类的属性或者方法   （因为子类运行起来默认都是用子类重写的方法）

如果是父类独有的可以省略super 如果重名可以用super指定

**super在构造器中的使用**

super（形参列表） 可以调用父类的构造器 必须在子类的构造器首行

与this(形参列表)有冲突 只能二选一。

如果不写 默认是super(); 

由上可知 子类的构造器的第一行只有三种情况（this(...) super(...) super() 而this（...） 也只有这三种情况 最终this无法一直互相调用 会形成递归 所以如果有n个构造器 则最多n-1个构造器调用this(...) 至少有一个调用super(...)） 子类一定会调用父类的构造器

### static

无论new多少个实例，被static修饰的为这些实例共享的，在内存中只有一份。

可以修饰 属性  方法  代码块  内部类 

static修饰的属性在实例化类的过程中随着类的加载而加载，早于实例变量。存在于方法区的静态域当中。

静态方法不能调用非静态结构。

### **final**

**作用**：
被final修饰的类不可以被继承
被final修饰的方法不可以被重写
被final修饰的变量不可以被改变



重点是第三句：
final修饰基本数据类型，值不可变  
final修饰引用数据类型，地址不可变，变量指向对象的内容可变。

```java
{  
    final Object[] objects = new Object[1];  
    objects[0] = new Object();  
    objects=  new Object[1];  // 这里编译过不去
}
```

#### final的使用

1 被final修饰的方法，JVM会尝试为之寻求内联，这对于提升Java的效率是非常重要的。因此，假如能确定方法不会被继承，那么尽量将方法定义为final的，(现在的java版本已经优化了)

2 被final修饰的常量，在编译阶段会存入调用类的常量池中，

3 **final修饰一个成员变量（属性），必须要显示初始化。** 这里有两种final初始化方式，一种是在变量声明的时候初始化；第二种方法是在声明变量的时候不赋初值，但是要在这个变量所在的类的所有的构造函数中(或者某个代码块中)对这个变量赋初值。

初始化方式：

```java
public class Study {  
    public final String a;  
  
    public Study() {  
        a = "123";  
    }  
  
    public Study(String b) {  
        a = b;  
    }  
  
}
```

```java
public class Study {  
    public final String a;  
  
    {  
        a = "123";  
    }  
  
    public Study() {  
    }  
  
    public Study(String b) {  
    }  
  
}

```

#### 被final修饰的常量在编译阶段会被放入常量池中

- final是用于定义常量的, 定义常量的好处是: 不需要重复地创建相同的变量. 而常量池是Java的一项重要技术, 由final修饰的变量会在编译阶段放入到调用类的常量池中.
- 请看下面这段演示代码. 这个示例是专门为了演示而设计的, 希望能方便大家理解这个知识点.

```java
public static void main(String[] args) {
    int n1 = 2019;          //普通变量
    final int n2 = 2019;    //final修饰的变量

    String s = "20190522";  
    String s1 = n1 + "0522";	//拼接字符串"20190512"
    String s2 = n2 + "0522";	

    System.out.println(s == s1);	//false
    System.out.println(s == s2);	//true
}
```

> 首先要介绍一点: 整数-127-128是默认加载到常量池里的, 也就是说如果涉及到-127-128的整数操作, 默认在编译期就能确定整数的值. 所以这里我故意选用数字2019(大于128), 避免数字默认就存在常量池中.

- 上面的代码运作过程是这样的:
- 首先根据final修饰的常量会在编译期放到常量池的原则, n2会在编译期间放到常量池中.
- 然后s变量所对应的"20190522"字符串会放入到字符串常量池中, 并对外提供一个引用返回给s变量.
- 这时候拼接字符串s1, 由于n1对应的数据没有放入常量池中, 所以s1暂时无法拼接, 需要等程序加载运行时才能确定s1对应的值.
- 但在拼接s2的时候, 由于n2已经存在于常量池, 所以可以直接与"0522"拼接, 拼接出的结果是"20190522". 这时系统会查看字符串常量池, 发现已经存在字符串20190522, 所以直接返回20190522的引用. 所以s2和s指向的是同一个引用, 这个引用指向的是字符串常量池中的20190522.

- 当程序执行时, n1变量才有具体的指向.
- 当拼接s1的时候, 会创建一个新的String类型对象, 也就是说字符串常量池中的20190522会对外提供一个新的引用.
- 所以当s1与s用"=="判断时, 由于对应的引用不同, 会返回false. 而s2和s指向同一个引用, 返回true.

> 总结: 这个例子想说明的是: 由于被final修饰的常量会在编译期进入常量池, 如果有涉及到该常量的操作, 很有可能在编译期就已经完成.

### **abstract**

#### **抽象类和抽象方法的概念**

首先了解抽象方法，`public abstract void open();`。 抽象方法只有声明，没有具体的实现。java规定：如果一个类有抽象方法，则这个类为抽象类。抽象类必须要用abstract修饰。

#### **抽象类的注意点**

- 抽象类不可实例化

- 抽象方法只能是public或者protected。因为如果是private，子类无法继承，也就不能实现该方法。默认不写是public

- 子类若继承于一个抽象类，必须实现父类的全部抽象方法，除非自己也是抽象类（此时子类和父类的抽象方法不可以同名）。

- 抽象类也可以有具体的方法，也可以完全不包含抽象方法（那该类还有必要设置为抽象类么？）

#### **抽象类的匿名子类**


```java
public class Test12 {  
    public static void main(String[] args) {  
        useItem(new Item() {  
            @Override  
            public void method() {  
                System.out.println("抽象类的匿名子类对象");  
            }  
        });  
    }  
    public static void useItem(Item item){  
        item.method();  
    }  
}  
abstract class Item {  
    public abstract void method();  
}
```

#### **abstract使用注意**

- abstract不能与final并列修饰同一个类。
- abstract 不能与private、static、final或native并列修饰同一个方法。

#### **依托于抽象类的模板方法与设计模式**

功能的一部分是固定的，一部分是易变的，利用多态可以将固定通用的写在父类中，容易变的写在子类中实现。

```java
public class Test13 {  
    public static void main(String[] args) {  
        BankProcess bankProcess = new BankInput();  
        bankProcess.process();  
        BankProcess bankProcess2 = new BankOutPut();  
        bankProcess2.process();  
    }  
}  
  
abstract class BankProcess {  
    private void pre() {  
        System.out.println("取号");  
    }  
  
    private void after() {  
        System.out.println("反馈评分");  
    }  
  
    protected abstract void invoke(); // 钩子方法 挂住哪个子类执行哪个方法  
  
    public final void process() {  
        pre();  
        invoke();  
        after();  
    }  
}  
  
class BankInput extends BankProcess {  
  
    @Override  
    protected void invoke() {  
        System.out.println("存款");  
    }  
}  
  
class BankOutPut extends BankProcess {  
  
    @Override  
    protected void invoke() {  
        System.out.println("贷款");  
    }  
}

```

### **interface**

继承是一个 “是不是” （is - a）的关系，而接口实现这是 “能不能”( like - a) 的关系。接口的本质是规范。将不同的类的相同的行为特征抽取出来。

#### **接口中的成员**

jdk1.7之前 只能有全局常量（public static final）和抽象方法(public abstract)
jdk1.8之后 除了上面以外，还能有静态方法，默认方法。

> 接口中定义的静态方法，只能用过接口来调用。

> 通过实现类的对象，可以调用接口中的默认方法。如果实现类重写了接口中的默认方法，调用时，仍然调用的是重写以后的方法。

#### 静态方法默认方法举例

```java
public class Test18 {  
    public static void main(String[] args) {  
        A.method1(); // 静态方法直接用接口调用  
        new B().method2(); // 默认方法使用实现类调用  
        //new B().method1(); // 报错  静态方法不能用实现类调用  
    }  
}  
interface A{  
    void method();  
    int X = 123;  
    // 静态方法和默认方法的public 都可以省略  
    public static void method1(){  
        System.out.println("静态方法");  
    }  
    public default void method2(){  
        System.out.println("默认方法");  
    }  
}  
class B implements A{  
    @Override  
    public void method() {  
        System.out.println("实现方法");  
    }  
        @Override  
    public void method2() {  
        System.out.println("重写默认方法");  
    }  
}
```

#### **接口的使用说明**

public static final 和public abstract 书写时可以省略。

子类实现接口必须实现全部抽象方法，除非该子类为抽象类。

#### 接口的匿名实现类

```java
new AA() {  
    @Override  
    public void method1() {  
        System.out.println("1");  
    }  
};
```

#### 接口在设计模式中的的应用：

**代理模式**

代理模式是一种使用代理对象来执行目标对象的方法并在代理对象中增强目标对象方法的一种设计模式。

使用代理模式的原因有：

- 中介隔离作用：在某些情况下，一个客户类**不想或者不能直接引用**一个委托对象，而代理对象可以在客户类和委托对象之间起到**中介**的作用(代理类和委托类实现相同的接口)。以现实生活为例，经纪人就是明星的代理，外界可以通过联系经纪人来间接与明星沟通。
- 开放封闭原则：可以通过给代理类增加额外的功能来扩展委托类的功能，这样只需要修改代理类而不需要再修改委托类，符合开闭原则。代理类主要负责为委托类预处理消息、过滤消息、把消息转发给委托类，以及事后对返回结果的处理等。代理类本身并不真正实现服务，而是同过调用委托类的相关方法，来提供特定的服务。使用代理模式，可以在调用委托类业务功能的前后加入一些公共的服务(例如鉴权、计时、缓存、日志、事务处理等)，甚至修改委托类的业务功能。

代理可以分为静态代理和动态代理，前者更接近代理模式的本质。

- 静态代理是由程序员编写代理类的源码，再编译代理类。所谓静态也就是在程序运行前就已经存在代理类的字节码文件，代理类和委托类的关系在运行前就已确定。
- 动态代理是代理类的源码是在程序运行期间由编译器动态的生成(如JVM根据**反射**等机制生成代理类)。代理类和委托类的关系在程序运行时确定。

```java
public class Test16 {  
    public static void main(String[] args) {  
        manger manger = new manger(new RealStar());  
        manger.process();  
    }  
}  
  
interface Star {  
    void sing();  
  
    void dealAction();  
}  
  
class RealStar implements Star {  
  
    @Override  
    public void sing() {  
        System.out.println("明星唱歌");  
    }  
  
    @Override  
    public void dealAction() {  
  
    }  
}  
  
class manger implements Star {  
  
    private Star star;  
  
    public manger(Star star) {  
        this.star = star;  
    }  
  
    @Override  
    public void sing() {  
        System.out.println("经理人准备工作");  
        star.sing();  
        System.out.println("经理人收尾工作");  
    }  
  
    @Override  
    public void dealAction() {  
        System.out.println("经纪人处理活动");  
    }  
  
    public void process(){  
        sing();  
        dealAction();  
    }  
}

```

**工厂模式**

实现了创建者和调用者的分离，即将创建对象的具体过程屏蔽合理起来，达到提高灵活性的目的。

学完反射再写。

#### **类与接口同名参数**

```java
public class Test18 {  
    public static void main(String[] args) {  
        new C().showX();  
    }  
}  
  
class A {  
    int x = 0;  
}  
interface B{  
    int x =2;  
}  
class C extends A implements B{  
    public void showX(){  
        System.out.println(super.x);  
        System.out.println(B.x);  
    }  
}
```

#### **类与接口同名同参数方法**

如果子类继承的父类和实现的接口中声明了同名同参数的方法，那么子类在没有重写此方法的情况下，默认调用的是父类中的同名同参数的方法。-类优先（仅针对方法，属性需要区分调用）

在子类中调用被父类，接口重写的方法 分别是`super.method();` `Interface.super.method();`

#### **接口的特性**

接口不可以有构造器，当然也不能实例化。

接口和接口可以多继承

```java
interface AA {  
    void method1();  
}  
  
interface BB {  
    void method2();  
}  
  
interface CC extends AA, BB {  
  
}  
  
class DD implements CC {  
  
    @Override  
    public void method1() {  
  
    }  
  
    @Override  
    public void method2() {  
  
    }  
}

```

但是类只能单继承多实现。

### **import**

- 可以使用 * 省略 （* 只能省略类 不能省略子包）
- 不同包下同名的类要同时使用，至少有一个需要以全类名的方式显示。
- import static 如下  import static 可以导入类下的静态结构。可以省略类名
```java  
import static java.lang.System.*;
//import static java.lang.System.out;
  
public class Test1 {  
public static void main(String[] args) {  
	out.println("123");  
}  
}
```
