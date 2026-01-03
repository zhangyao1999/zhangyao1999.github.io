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