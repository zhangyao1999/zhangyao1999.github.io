---
icon: file
date: 2025-12-11
order: 10
category:
  - JAVA
tag:
  - 基础部分
  - 
  - 
  - 
  - 
  - 
  - 
  - 
---

# JAVASE

## Java语言概述

### JDK和JRE和JVM

- JDK是Java开发工具包 包含jre和其他的编译打包等开发工具。
- JRE是Java运行环境包含了JVM和java核心类库。
- JVM就是虚拟机 运行在不同操作系统之上，通过字节码文件来运行。

### 安装JDK

- **PATH**是给操作系统识别的，比如在命令行中敲入java javac等命令时，系统会去PATH中去找路径下的exe 。
- **JAVA_HOME**时所有需要调用JDK的软件约定俗成的路径。
- **CLASSPATH**顾名思义为包路径，告诉Java在执行的时候，去哪里找到需要的包和类供程序使用，JDK版本大于1.5之后不需要了。
	- 我们经常见JAVA_HOME这个路径包含在PATH中是为了方便以后有更新或者切换JDK的时候不用改来改去，只改一处未知就可以了。
- 安装后直接使用java -version就可以查看java版本。11

- 变量名：**JAVA_HOME**
- 变量值：**C:\Program Files (x86)\Java\jdk1.8.0_91**        // 要根据自己的实际路径配置

- 变量名：**CLASSPATH**
- 变量值：**.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;**         //记得前面有个"."
- 变量名：**Path**
- 变量值：**%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;**

### HelloWorld

- javac HelloWorld.java ：编译为字节码文件
- java HelloWorld ：运行字节码文件（不需要加.class后缀）
- 编码问题：
	- 由于mac 系统默认为utf-8所以中文没有乱码，这里手动使用[[vim命令]]中的修改文件编码格式将utf-8修改为gbk编码。保存再次编译后报错。

## java核心语法

### 字面量

作用：告诉程序员，数据在程序中的书写格式。

```Java
public class Demo {
public static void main(String[] args) {
        System.out.println(10); // 输出一个整数
        System.out.println(5.5); // 输出一个小数
        System.out.println('a'); // 输出一个字符
        System.out.println(true); // 输出boolean值true
        System.out.println("欢迎来到黑马程序员"); // 输出字符串
    }
}
```

### 变量

变量就在程序中临时存储数据的容器。但是这个容器中只能存一个值。

### 数据类型

- 基本数据类型
- 引用数据类型（面向对象的时候再深入学习）

基本数据类型的四类八种

| **数据类型** | **关键字** | **内存占用** | **取值范围**                              |
| ------------ | ---------- | ------------ | ----------------------------------------- |
| 整数         | byte       | 1            | 负的2的7次方 ~ 2的7次方-1(-128~127)       |
|              | short      | 2            | 负的2的15次方 ~ 2的15次方-1(-32768~32767) |
|              | int        | 4            | 负的2的31次方 ~ 2的31次方-1               |
|              | long       | 8            | 负的2的63次方 ~ 2的63次方-1               |
| 浮点数       | float      | 4            | 1.401298e-45 ~ 3.402823e+38               |
|              | double     | 8            | 4.9000000e-324 ~ 1.797693e+308            |
| 字符         | char       | 2            | 0-65535                                   |
| 布尔         | boolean    | 1            | true，false                               |

**说明**

- e+38 表示是乘以10的38次方，同样，e-45 表示乘以10的负45次方
- 在 Java 中整数默认是 int 类型，浮点数默认是 double 类型

**需要记忆以下几点：**

- byte 类型的取值范围： -128 ~ 127
- int 类型的大概取值范围： -21亿多  ~ 21亿多
- 整数类型和小数类型的取值范围大小关系： double > float > long > int > short > byte

**注意点**

- 如果要定义 一个整数类型的变量，不知道选择哪种数据类型了，默认使用 int。
- 如果要定义 一个小数类型的变量，不知道选择哪种数据类型了，默认使用 double。
- 如果要定义一个 long 类型的变量，在数据值的后面需要加上 L 后缀。(大小写都可以，建议大写)
- 如果要定义一个 float 类型的变量，在数据值的后面需要加上 F 后缀。(大小写都可以）

### +  -  *  /  %

**分类**：+  -  *  /  %

**运算特点：**

\+ - * ：跟小学数学中一模一样没有任何区别

/：

1. 整数相除结果只能得到整数，如果结果想要是小数，必须要有小数参数
2. 小数直接参与运算，得到的结果有可能是不精确的

```java
class Main {
    public static void main(String[] args) {
        /*
        算数运算符：+ - * / %
        整数计算、小数计算
        */

        // 1. 整数计算
        // 细节：整数相除结果还是整数，就是商
        //       其他运算跟数学中是一模一样的
        int a = 10;
        int b = 3;

        System.out.println(a + b);// 13
        System.out.println(a - b);// 7
        System.out.println(a * b);// 30
        System.out.println(a / b);// 3
        System.out.println(a % b);// 1

        System.out.println("-------------------------");

        // 2.小数计算
        // 细节：
        //     小数直接参与计算，结果有可能不精确的
        double c = 1.1;
        double d = 1.01;

        System.out.println(c + d);// 2.1100000000000003
        System.out.println(c - d);// 0.09000000000000008
        System.out.println(c * d);// 1.1110000000000002
        System.out.println(c / d);// 1.0891089108910892
        System.out.println(c % d);// 0.09000000000000008
    }
}

```

### 隐式转换

**概念：**也叫自动类型提升。就是把一个取值范围小的数据或者变量，赋值给另一个取值范围大的变量。此时不需要我们额外写代码单独实现，是程序自动帮我们完成的。

**简单记忆：**就是小的给大的，可以直接给。

**触发时机：**

- 不同类型的数据进行计算，默认采取隐式转换，Java自动转换，无需我们写代码

**提升规则：**

- **规则一：**如有byte short类型的数据，先提升为int类型
- **规则二：**把取值范围小的提升为取值范围大的，再进行运算

备注1：

提升的时候是先执行规则一，再执行规则二，如果计算的数据没有byte和short类型，则跳过规则一，直接执行规则二。

备注二：

**取值范围从小到大的关系：**byte short int long float double

**隐式转换的练习**

请看下面案例是否有误，如果有问题，请说出原因，如果没有问题，请说出运算过程和运算结果

**案例一**

```Java
double d = 10;
System.out.println(d);//10.0
```

**解释**：

10是整数，整数默认是int类型的。而在取值范围的顺序中：byte short int long float double，在赋值的时候把一个int类型的赋值给了一个double类型的。把一个小的赋值给一个大的是可以直接给的。

**案例二**

```Java
byte b = 100;
int i = b;//可以成功赋值
```

**解释：**

因为byte的取值范围是小的，int的取值范围是大的，在底层进行了隐式转换，不需要我们额外写代码单独实现，是可以直接赋值。

**案例三**

请说出下面代码在计算的时候，类型转换的情况

```Java
        byte b = 100;
        short s = 200;
        double d = 20.3;
        double result1 = b + s + d;
        System.out.println(result1);// 320.3
```

**解释：**

第一步：先把byte类型的100，和short类型的200提升为int类型，结果：300（int） 第二步：再执行300（int） + 变量d，int类型的300会提升为double类型，变成300.0 结果：320.3（double）

**案例四**

```Java
int i = 10;
long n = 20L;
??? result = i + n;
问变量result是什么类型的？
```

**解释：**

变量i是int类型的，变量n是long类型的。而在取值范围的顺序中：byte short int long float double，变量i里面的值会自动提升为long类型的，最终的结果其实就是两个long相加，那么最终的result是long类型的。

**案例五**

```Java
int i = 10;
long n = 100L;
double d = 20.0;
??? result = i + n + d;
问变量result是什么类型的？
```

**解释：**

变量i是int类型，变量n是long类型，变量d是double类型。而在取值范围的顺序中：byte short int long float double，所以变量i和变量n里面的值在参与运算的时候，都会进行类型提升，变成double。最终其实就是三个double进行相加，那么最终的结果就是double类型的。

**案例六**

```Java
byte b1 = 10;
byte b2 = 20;
??? result = b1 + b2;//int
问变量result是什么类型的？
```

**解释：**

因为b1和b2都是byte类型的。所以在参与计算的时候，变量b1和变量b2里面的值都会自动提升为int类型的。最终其实就是两个int类型的相加，最终结果也是int类型的。

**案例七**

```Java
byte b = 10;
short s = 20;
long n = 100L;
??? result = b + s + n;
问变量result是什么类型的？long
```

**解释：**

变量b是byte类型的，变量s是short类型的，变量n是long类型的。 byte，short，char类型的变量在参与运算的时候，变量里面的值会直接先提升为int。

第一步：变量b和变量s里面的值会先提升为int参与运算。

                int + int + long

第二步：long类型的取值范围是大于int的取值范围的。

                所以变量b和变量s里面的值会再次提升为long。
    
                long + long + long。

所以最终结果是long类型的。

**案例八**

检查下面代码，程序运行的时候是否会报错，如果会，请说明错误原因

```Java
short s1 = 100;
short s2 = 200;
byte result1 = s1 + s2;
System.out.println(result1);
```

**解释：**

```Java
short s1 = 100;
short s2 = 200;
// 修改方案1：
//      300 ：二进制 00000000 00000000 00000001 00101100
//      强制转换byte: 00101100(44)
byte result1 = (byte) (s1 + s2);
System.out.println(result1);


// 修改方案2：
int result2 = s1 + s2;
System.out.println(result2); // 300
```

### **强制转换**

**概念：**如果要把一个取值范围大的数据或者变量赋值给另一个取值范围小的变量。是不允许直接操作。如果一定要这么干，就需要加入强制转换。

**书写格式：**目标数据类型 变量名 = （目标数据类型）被强转的数据；

**简单理解：**要转成什么类型的，那么就在小括号中写什么类型就可以了。

**案例：**

```Java
public class OperatorDemo2 {
    public static void main(String[] args) {
        double a = 12.3;
        int b = (int) a;
        System.out.println(b);//12
    }
}
```

**注意：**强制转换有可能会导致数据发生错误。（数据的精度丢失）

### **字符串的+操作**

**核心技巧**

- 当+操作中出现字符串时，此时就是字符串的连接符，会将前后的数据进行拼接，并产生一个新的字符串。
- 当连续进行+操作时，从左到右逐个执行的。

**字符串相加的练习**

案例一

```Java
1 + "abc" + 1
```

**结果：**"1abc1"

**解释：**

1. 1 + "abc"。在这个过程中，有字符串参与的，所以做的是拼接操作，产生一个新的字符串"1abc"
2. "1abc" + 1。这个过程中，有字符串参与的，所以做的也是拼接操作，产生一个新的字符串"1abc1"

**案例二**

```Java
1 + 2 + "abc" + 2 + 1
```

**结果：**“3abc21”

**解释：**

1. 1 + 2 。在这个过程中，没有字符串参与的，所以做的是加法运算，结果为3。
2. 3 + "abc"。在这个过程中，有字符串参与的，所以做的是拼接操作，产生一个新的字符串"3abc"。
3. "3abc" + 2。在这个过程中，有字符串参与的，所以做的是拼接操作，产生一个新的字符串"3abc2"。
4. "3abc2" + 1。在这个过程中，有字符串参与的，所以做的是拼接操作，产生一个新的字符串“3abc21”

**案例三**

```Java
String name = "黑默丁格";
System.out.println("我的名字是" + name);
```

**结果：** 我的名字是黑默丁格

**解释：**当字符串跟变量相加的时候，实际上是跟变量里面的值进行拼接。

### **字符的+操作**

**规则：**当+操作中出现了字符，会拿着字符到计算机内置的ASCII码表中去查对应的数字，然后再进行计算。

**案例：**

```Java
char c = 'a';
int result = c + 0;
System.out.println(result);//97
```

> ASCII码表中：
>
> 'a'   -----    97
>
> 'A'   -----    65

### **++ -- **

**分类：**

- ++  自增运算符
- --  自减运算符

++：就是把变量里面的值+1

--：就是把变量里面的值-1

**使用方式：**

- 放在变量的前面，我们叫做先++。 比如：++a
- 放在变量的后面，我们叫做后++。 比如：a++

**注意：**不管是先++，还是后++。单独写在一行的时候，运算结果是一模一样的。

### **=、-=、*=、/=、%=**

**分类：**+=、-=、*=、/=、%=

**运算规则：**就是把左边跟右边进行运算，把最终的结果赋值给左边，对右边没有任何影响。

**案例：**

```Java
public class OperatorDemo7 {
    public static void main(String[] args) {
        //扩展赋值运算符
        int a = 10;
        int b = 20;
        a += b;//把左边和右边相加，再把最终的结果赋值给左边，对右边没有任何影响
        // 相当于 a = a + b;
        System.out.println(a);//30
        System.out.println(b);//20
    }
}
```

**注意：**扩展的赋值运算符中隐层还包含了一个强制转换。以+=为例。a += b ;实际上相当于 a = (byte)(a + b);

```Java
public class OperatorDemo8 {
    public static void main(String[] args) {
        byte a = 10;
        byte b = 20;
        //a += b;
        a = (byte)(a + b);
        System.out.println(a);//30
    }
}
```

### **& 和 | 和 ！**

**& 和 | 的使用**

**&：逻辑与（而且）**

 两边都为真，结果才是真，只要有一个为假，那么结果就是假。

**|：逻辑或（或者）**

两边都为假，结果才是假，只要有一个为真，那么结果就是真。

**运算符的优先级**

在Java中涉及了很多的运算符，每一种运算符都有各自的优先级。但是这些优先级不需要记忆。咱们只要知道其中一点：**小括号优先于所有。**

**短路逻辑运算符**

**分类：**  &&   ||

**&&：**运算结果跟&是一模一样的，只不过具有短路效果。

**||：**运算结果跟|是一模一样的。只不过具有短路效果。

**逻辑核心：**

- 当左边不能确定整个表达式的结果，右边才会执行。
- 当左边能确定整个表达式的结果，那么右边就不会执行了。从而提高了代码的运行效率。

##  流程控制语句

在一个程序执行的过程中，各条语句的执行顺序对程序的结果是有直接影响的。所以，我们必须清楚每条语句的执行流程。而且，很多时候要通过控制语句的执行顺序来实现我们想要的功能。

### **流程控制语句分类**

- 顺序结构
- 判断和选择结构(if, switch)
- 循环结构(for, while, do…while)

### **if**

**if语句格式1**

**格式：**

```Java
if (关系表达式) {
    语句体;  
}
```

### **switch**

**格式**

```Java
switch (表达式) {
  case 1:
    语句体1;
    break;
  case 2:
    语句体2;
    break;
  ...
  default:
    语句体n+1;
    break;
}
```

![image-20260101150426963](https://raw.githubusercontent.com/zhangyao1999/photo_gallery/main/img/20260101150427039.png)

**执行流程：**

- 首先，计算出表达式的值 
- 其次，和case依次比较，一旦有对应的值，就会执行相应的语句，在执行的过程中，遇到break就会结 束。 
- 最后，如果所有的case都和表达式的值不匹配，就会执行default语句体部分，然后程序结束掉。 

**switch的扩展知识：**

- default的位置和省略情况

default可以放在任意位置，也可以省略

- case穿透

不写break会引发case穿透现象 ，一直执行到有break的语句，如果没写 全部执行。

![image-20260101151419214](https://raw.githubusercontent.com/zhangyao1999/photo_gallery/main/img/20260101151419244.png)

执行结果是 

```
没有这个星期

二

三
```

- switch高版本的新特性，JDK12（预览版）JDK14（正式版）
  1. 箭头标签

![20260101152559977.png](https://raw.githubusercontent.com/zhangyao1999/photo_gallery/main/img/20260101152559977.png)

2. case后面多个值

![image-20260101152807926](https://raw.githubusercontent.com/zhangyao1999/photo_gallery/main/img/20260101152807961.png)

3. yield关键字

![image-20260101153235106](https://raw.githubusercontent.com/zhangyao1999/photo_gallery/main/img/20260101153235144.png)

如果语句体只有一样，大括号和yield都可以省略。

## 数组

**概念：** 指的是一种容器，可以同来存储同种数据类型的多个值。但是数组容器在存储数据的时候，需要结合隐式转换考虑。

**比如：** 定义了一个int类型的数组。那么boolean。double类型的数据是不能存到这个数组中的，但是byte类型，short类型，int类型的数据是可以存到这个数组里面的。

**建议：** 容器的类，和存储的数据类型保持一致。

**举例：**

- 整数1 2 3 4 56 就可以使用int类型的数组来存储。
- 小数1.1 1.2 1.3 1.4 就可以使用double类型的数组来存储。
- 字符串"aaa"  "bbb"  "ccc" 就可以使用String类型的数组来存储。

### 数组定义

**格式一：数据类型 [] 数组名**

比如：int [] array

**格式二：数据类型  数组名 []**

比如： int array []

**详解：**

- 数据类型：限定了数组以后能存什么类型的数据。
- 方括号：表示现在定义的是一个数组。
- 数组名：就是一个名字而已，方便以后使用。

**注意：** 方法括号跟数组名，谁写在前面，谁写在后面都是一样的。平时习惯性使用第一种方式。

### **数组的静态初始化**

**完整格式：数据类型[] 数组名 = new 数据类型[]{元素1，元素2，元素3，元素4...};**

比如：

```Java
int[] arr = new int[]{11,22,33};
double[] arr = new double[]{1.1,1.2,1.3};
```

**格式详解：**

- 数据类型：限定了数组以后能存什么类型的数据。
- 方括号：表示现在定义的是一个数组。
- 数组名：其实就是名字而已，方便以后使用，在起名字的时候遵循小驼峰命名法。例：arr   namesArr
- new：就是给数组在内存中开辟了一个空间。
- 数据类型：限定了数组以后能存什么类型的数据。前面和后面的数据类型一定要保持一致。

```Java
int[] arr = new double[]{11,22,33};//错误写法
```

- 方括号：表示现在定义的是一个数组。
- 大括号：表示数组里面的元素。元素也就是存入到数组中的数据。多个元素之间，一定要用逗号隔开。

**注意：**

- 等号前后的数据类型必须保持一致。
- 数组一旦创建之后，长度不能发生变化。

**简化格式：数据类型[] 数组名 = {元素1，元素2，元素3，元素4...};**

比如：

```Java
int[] array = {1,2,3,4,5};
double[] array = {1.1,1.2,1.3};
```

### **数组元素访问**

**格式：** 数组名[索引];

**作用：**

- 获取数组中对应索引上的值
- 修改数组中对应索引上的值
- 一旦修改之后，原来的值就会被覆盖了。

### **数组的动态初始化**

**格式：** 数据类型[] 数组名 = new 数据类型[数组的长度];

**举例：**

```Java
//1.定义一个数组，存3个人的年龄，年龄未知
int[] agesArr = new int[3];

//2.定义一个数组，存班级10名学生的考试成绩，考试成绩暂时未知，考完才知道。
int[] scoresArr = new int[10];
```

**数组的默认初始化值：**

- 整数类型：0
- 小数类型：0.0
- 布尔类型：false
- 字符类型：'\u0000'
- 引用类型：null

### **数组两种初始化方式的区别**

**静态初始化：** int[] arr = {1,2,3,4,5};

**说明：** 手动指定数组的元素，系统会根据元素的个数，计算出数组的长度。

**动态初始化：** int[] arr = new int[3];

**说明：** 手动指定数组长度，由系统给出默认初始化值。

## **包装类**

希望基本数据类型具有类的特征，可以面向对象。所以搞了包装类。
Byte Short Integer Long Float Double Boolean Character 它们都是Number的子类。

- 包装类和对应的基本数据类型 可以自动装箱，拆箱 无缝转换。
- 包装类作为函数的形参时，和其对应的基本类型作为形参效果一样，都是传递值，**对于该对象本身并不会改变**。
- 包装类.parseXXX方法可以转换成String。是常用方法。

**常见题目：**

```java
Object o1 = true?new Integer(1):new Double(2.0);   // int和double 自动类型提升
System.out.println(o1);  // 输出1.0
```

**当创建Integer对象时,不使用new Integer (inti) 语句,大小在-128~127之间,对象存放在Integer常量池中。**

```java
Integer i1 = new Integer(1);  
Integer i2 = new Integer(1); // new 的包装类 地址值都不同  
System.out.println(i1 == i2); // false   
Integer i3 = 1;  
Integer i4 = 1; // Integer内部有IntegerCache 范围在-128到127 之间 自动装箱时的时候是同一个实例  
System.out.println(i3 == i4); // true  
  
Integer i5 = 128;  
Integer i6 = 128;  
System.out.println(i5 == i6); // false
```

## **Object**

所有类的父类或者间接父类

### **clone**

参考帖子：[java.lang.Object.clone()解读 - zero516cn - 博客园 (cnblogs.com)](https://www.cnblogs.com/gw811/archive/2012/10/07/2712252.html)
**读源码可以知道**
1.clone是**native方法** 
2.clone被protected修饰符修饰，所有子类的都可以使用 。
3.clone返回一个object对象。

**浅层复制与深层复制概念：**

**浅层复制：** 被复制的对象的所有成员属性都有与原来的对象相同的值，而所有的对其他对象的引用仍然指向原来的对象。换言之，浅层复制仅仅复制所考虑的对象，而不复制它所引用的对象。（概念不好理解，请结合下文的示例去理解）

**深层复制：** 被复制对象的所有变量都含有与原来的对象相同的值，除去那些引用其他对象的变量。那些引用其他对象的变量将指向被复制过的新对象，而不是原有的那些被引用的对象。换言之，深层复制要复制的对象引用的对象都复制一遍。

**实现clone方法需要注意**
- 类想要用clone方法必须实现Cloneable接口 否则会抛出CloneNotSupportedException。
- java的clone是浅拷贝。
- clone被protected修饰符修饰,子类内部可以使用，重写需要修改为public 方便子类外部调用。

**深拷贝的俩个例子：**
- 手动拷贝 不推荐
- 序列化拷贝 ：把对象写到流中的过程是串行化(Serilization)过程，而把对象从流中读出来是并行化(Deserialization)过程。应当指出的是，写在流中的是对象的一个拷贝，而原来对象仍然存在JVM里面。  　　在Java语言里深层复制一个对象，常常可以先使对象实现Serializable接口，然后把对象（实际上只是对象的一个拷贝）写到一个流中，再从流中读出来，便可以重建对象。  　　这样做的前提是对象以及对象内部所有引用到的对象都是可串行化的，否则，就需要仔细考察那些不可串行化的对象是否设成transient，从而将之排除在复制过程之外。代码改进如下：
``` java
package org.example;
 
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;
 
public class Test {
    public static void main(String[] args) throws CloneNotSupportedException, IOException, ClassNotFoundException {
        Person p1 = new Person();
        p1.name = "张垚";
        p1.age = 12;
        House house = new House();
        house.setAddress("济南");
        house.setPort(123);
        p1.house = house;
        Person p2 = (Person) p1.clone();
        p2.getHouse().setPort(124);
        System.out.println(p2);
        System.out.println(p1);
        Person p3 = (Person) p1.deepClone();
        System.out.println(p3);
    }
 
}
 
class Person implements Cloneable, Serializable { // 不Cloneable 会报错 不Serializable无法序列化
    String name;
    int age;
 
    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", house=" + house +
                '}';
    }
 
    public String getName() {
        return name;
    }
 
    public void setName(String name) {
        this.name = name;
    }
 
    public int getAge() {
        return age;
    }
 
    public void setAge(int age) {
        this.age = age;
    }
 
    public House getHouse() {
        return house;
    }
 
    public void setHouse(House house) {
        this.house = house;
    }
 
    House house;
 
    @Override
    public Object clone() throws CloneNotSupportedException {
        Person clone = (Person) super.clone();
        House clone1 = (House) house.clone();
        clone.setHouse(clone1);// 实现深克隆
        return clone;
    }
 
    public Object deepClone() throws IOException, ClassNotFoundException {// 序列化实现深克隆
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        ObjectOutputStream objectOutputStream = new ObjectOutputStream(byteArrayOutputStream);
        objectOutputStream.writeObject(this);
 
        ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(byteArrayOutputStream.toByteArray());
        ObjectInputStream objectInputStream = new ObjectInputStream(byteArrayInputStream);
        return objectInputStream.readObject();
 
    }
 
}
 
class Student implements Cloneable, Serializable {
    String major;
    int score;
}
 
class House implements Cloneable, Serializable {
    String address;
    int port;
 
    public String getAddress() {
        return address;
    }
 
    public void setAddress(String address) {
        this.address = address;
    }
 
    @Override
    public String toString() {
        return "House{" +
                "address='" + address + '\'' +
                ", port=" + port +
                '}';
    }
 
    public int getPort() {
        return port;
    }
 
    public void setPort(int port) {
        this.port = port;
    }
 
    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}
 
```

### **equals**

**源码**
```java
public boolean equals(Object obj) {  
    return (this == obj);  
}
```
可以看到，Object原生的equals的效果和== 是相同的。要正确的使用该方法需要重写。像String Date File 包装类等都重写了eqlals方法。

**== 和 equals 的区别**

在*基本数据类型*中: 比较的是数值是否相等。（byte short int long double float char 他们互相之间都可以使用== 除了boolean）
在*引用数据类型*中:比较的是地址值是否相等，即俩个引用是否指向同一个对象实例。

### **finalize**

当对象即将进行垃圾回收时，将调用该方法。
与C++中的析构函数不是对应的。C++中的析构函数调用的时机是确定的，而java不确定。
[finalize的作用 - zhangniuniu - 博客园 (cnblogs.com)](https://www.cnblogs.com/zyy1688/p/10838581.html)

### **toString**

**java源码**
```java
public String toString() {  
    return getClass().getName() + "@" + Integer.toHexString(hashCode());  
}
```
可以看到输出类名+jvm中的虚拟地址值
我们可以重写该方法输出类中的属性。

## **javaBean**

- java语言写成的可重用的公共组件
- 开发者将一些功能 值 数据库访问等打包 可以在jsp servlet 其他javabean使用 
- 条件
	- 有无参构造方法
	- 公共的
	- 有属性有get set方法

## **异常处理**

**概念**
java语言中，将程序发送的不正常情况称为异常（语法错误和逻辑错误不是异常）

异常（Throwable）分为两类：

### Error

java虚拟机无法解决的严重问题，如jvm系统内部错误，资源耗尽等情况。

StackOverflowError(方法递归容易导致) 和OOM（new 了一个很大的数组 堆溢出）。一般不编写针对性的问题处理。

### Exception

其他编程错误或者外在的因素导致的一般性问题。

**异常的分类**

编译时异常(IOException ClassNotFountException)  
- 必须在代码中处理。包括Exception也是编译时异常。

运行时异常(RuntimeException) 
- 可以不处理



### 异常处理方式

方式一：try catch finally 真正的将异常处理掉了。

> catch中的异常类型如果没有子父类关系，谁在上下无所谓，如果有则子类在上
>
> finally 是一定会执行的 即使catch中有异常 return 或者try中有return  也还是会执行 且此处的return会覆盖前两处结构的return
>
> ```java
> public class Test12 {  
>     public static void main(String[] args) {  
>         System.out.println(Method());   // 3
>     }  
>   
>     static int Method() {  
>         try {  
>             int i = 1 / 0;  
>             return 1;  
>         } catch (Exception e) {  
>             return 2;  
>         } finally {  
>             return 3;  
>         }  
>     }  
> }
> ```

方式二：在方法声明处 throws + 异常类型。指明该方法可能抛出的异常类型。
一旦方法体执行时，出现异常，会在异常代码处生成一个异常累的对象，此对象满足throws后的异常类型是，就会被抛出。后续的代码不在执行。没有处理，只是抛给了方法的调用者。

**如何选用**
如果方法之间是层层递进，相互依赖，那么可以使用throws 
如果是子类继承父类，父类又没有抛出异常，那么可以try catch



### 手动抛出异常

使用throw new Exception();
**自定义异常**

```java
class MyException extends RuntimeException{  
    // 序列化唯一标识使用  
    static final long serialVersionUID = -7034897190715766939L;  
    // 重载几个构造器  
    public MyException(){  
        super();  
    }  
    public MyException(String msg){  
        super(msg);  
    }  
}
```



### throw和throws有什么区别

throw 抛出异常 手动抛出一个异常对象 在方法体内

throws 声明异常 是异常处理的一种方式 在方法声明处



![](https://raw.githubusercontent.com/zhangyao1999/photo_gallery/main/img/20260110193242848.jpeg)



## 类与类的成员

### 属性

**属性别名**

- 属性 = 成员变量 = field = 域 / 字段 。

**属性和局部变量的区别**

- 属性
	- 定义在类的一对{}内。
	- 可以使用权限修饰符修饰
	- 有默认初始化值。
- 局部变量
	- 声明在方法内，方法形参，代码块内，构造器形参，构造器内部。
	- 不可以使用权限修饰符。 
	- 没有默认初始化值。

**默认初始化值**

- 整形默认为0。
- 浮点型默认为0.0
- 字符型默认为0或者是`\u0000`
- 布尔型默认为false
- 引用数据类型默认为null

**属性初始化过程**

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

java的参数只有一种传递机制：== 值传递 ==。
	对于基本数据类型，拷贝==数据值==给形参。     
	对于引用数据类型，拷贝==引用地址值==给形参。

- 特别的我们知道String作为形参，方法内部修改并不会传递到外部。原因是在于String底层维护一个final数组，每次对String进行修改都会new 一个新的String实例，所以在方法内部修改String 只是给形参指向的实例修改到了一个新的实例，不会对原来的入参有影响。

![String传值](https://raw.githubusercontent.com/zhangyao1999/photo_gallery/main/img/20260110193242848.jpeg)



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

**构造器调用super**

- 可以在子类里用super显示的调用父类的属性或者方法   （因为子类运行起来默认都是用子类重写的方法）

- 如果是父类独有的可以省略super 如果重名可以用super指定

- 构造器
  - super（形参列表） 可以调用父类的构造器 必须在子类的构造器首行
  
  - (与this(形参列表)有冲突 只能二选一)。
  
  - 如果不写 默认是super(); 
  
  - 由上可知 子类的构造器的第一行只有三种情况（this(...) super(...) super() 而this（...） 也只有这三种情况 最终this无法一直互相调用 会形成递归 所以如果有n个构造器 则最多n-1个构造器调用this(...) 至少有一个调用super(...)） 子类一定会调用父类的构造器
  

**子类对象实例化过程**

- 从结果来看
	- 子类继承父类后获取了父类中声明的属性和方法。
	- 创建子类的对象，再堆空间中，就会加载所有父类声明的属性。
- 从过程上看
	- 当我们通过子类的构造器构造对象是，最终都会直接或者间接的调用到父类的构造器，直到调用到了Object的空参构造器停止。（原因是super）。正因为这样，内存中才有父类的结构。
- 注意：
	- 虽然调用了多个构造器，但是只new 了一个对象。

### 代码块

作用：用来初始化类，对象
**使用**

- 如果被修饰，只能用static 。也就是说只有静态代码块和构造代码块（类中）和普通代码块（方法中）。

**执行顺序**

静态代码块>构造代码块>构造函数>普通代码块

**父类和子类执行顺序**
先父后子 静态代码块内容先执行，接着执行父类构造代码块和构造方法，然后执行子类构造代码块和构造方法。

---

**静态代码块**

格式：在java类中，使用static修饰{}。只能调用静态的结构。

```java
static {  
    System.out.println("静态代码块");  
}
```

**执行时机**:静态代码块在类被加载的时候就运行了，而且只运行一次，并且优先于**各种代码块以及构造函数**。如果一个类中有多个静态代码块，会按照书写顺序依次执行。

**作用**:例如项目启动需要加载的配置文件等资源，可以放入静态代码块中。

---

**构造代码块**

格式：在类中，使用{}声明。
```java
{  
    System.out.println("构造代码块");  
}
```
**执行时机**:　构造代码块在创建对象时被调用，每次创建对象都会调用一次，但是优先于构造函数执行。需要注意的是，听名字我们就知道，构造代码块不是优先于构造函数执行，而是依托于构造函数，也就是说，如果你不实例化对象，构造代码块是不会执行的。如果存在多个构造代码块，则执行顺序按照书写顺序依次执行。
**作用**:构造函数的作用类似，都能对对象进行初始化，并且只要创建一个对象，构造代码块都会执行一次。但是反过来，构造函数则不一定每个对象建立时都执行（多个构造函数情况下，建立对象时传入的参数不同则初始化使用对应的构造函数）。做诸如统计创建对象的次数等功能

---

**普通代码块**

普通代码块和构造代码块的区别是，构造代码块是在类中定义的，而普通代码块是在方法体中定义的。且普通代码块的执行顺序和书写顺序一致。

---

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

## 三大特征

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

#### **方法的重写**

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

#### **重载和重写的区别**

- 细节 
  - 重载，相同方法名，形参列表不同
  - 重写是字父类，同名同形参。子类的重写 权限修饰符只能大于等于父类的。其他像返回值，异常只能小于父类的。
- 从编译和运行的角度看
  - 重载，是指允许存在多个同名方法，而这些方法的参数不同。编译器根据方法不同的参数表，对同名法的名称做修饰。对于编译器而言，这些同名方法就成了不同的方法。它们的调用地址在编译期就绑定了。**Java的重载是可以包括父类和子类的，即子类可以重载父类的同名不同参数的方法**。
  - 所以：对于重载而言，在方法调用之前，编译器就已经确定了所要调用的方法，这称为“早绑定”或“静态绑定”
  - 而对于多态，只有等到方法调用的那一刻，解释运行器才会确定所要调用的具体方法这称为“晚绑定”或“动态绑定 ”
  - 引用一句Bruce Eckell的话：“不要犯傻，如果它不是晚绑定，它就不是多态。

#### **子类对象实例化过程**

- 从结果来看
	- 子类继承父类后获取了父类中声明的属性和方法。
	- 创建子类的对象，再堆空间中，就会加载所有父类声明的属性。
- 从过程上看
	- 当我们通过子类的构造器构造对象是，最终都会直接或者间接的调用到父类的构造器，直到调用到了Object的空参构造器停止。（原因是[[super]]）。正因为这样，内存中才有父类的结构。
- 注意：
	- 虽然调用了多个构造器，但是只new 了一个对象。

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

> 对象的多态性只适用于方法，不适用于属性。属性的编译和运行都看左边（就近原则）。

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

## 关键字

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

**final的使用**

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

**被final修饰的常量在编译阶段会被放入常量池中**

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

#### 接口在设计模式中的的应用

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

### **线程的生命周期**

Thread内部有个枚举类 定义了线程的所有声明周期 如下：

```java
public enum State {  
   NEW,  
  
   RUNNABLE,  
  
   BLOCKED,  
  
   WAITING,  
  
   TIMED_WAITING,  
  
   TERMINATED;  
}

```

通常我们说线程在一个完整的生命周期内通常要经历如下五种状态：
**新建**：声明或者创建一个Thread类时，处于新建状态。
**就绪**：新建状态的Thread类调用start()之后，或者运行的线程失去cpu时间片，或者阻塞的cpu停止挂起操作 就会处于就绪状态。
**运行**：当就绪的线程被调度并获得CPU资源时进入运行状态。
**阻塞**：特殊的情况下，被认为挂起或者执行输入输出操作时，让出CPU并临时中止自己的执行。
**死亡**：线程完成了全部工作或者被强制性的中止或者出现异常导致结束。

### **线程的同步**

多个线程执行的不确定性引起执行结果的不稳定
多个线程对账本的共享，会造成操作的不忘中心，会破坏数据。
例如 有一个共享账务，客户同时在线下ATM和手机银行取钱，扣款逻辑如下：
if （余额 >= 扣款）{
	// 转账扣款
}
如果这俩个渠道的线程同时进入了if分支，又还没有扣款，那么就会多扣钱。

**同步代码块**

synchronized(同步监视器){
	// 需要被同步的代码
}
说明：操作共享数据的代码，即为需要被同步的代码
		共享数据：多个线程共同操作的变量，比如：卖票系统的票数
		同步监视器：俗称 锁 任何一个类的对象都可以充当锁。（这个对象必须得是多线程共用一个实例）

举例：

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
    private static Object object = new Object();

    @Override
    public void run() {
        while (true) {
            synchronized (object) {
                if (num > 0) {
                    try {
                        Thread.sleep(100);
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                    System.out.println(Thread.currentThread().getName() + "窗口卖了第" + num + "号票");
                    num--;
                } else {
                    System.out.println(Thread.currentThread().getName() + "窗口停止卖票");
                    break;
                }
            }
        }
    }
}


```

**同步监视器**

- 情况一 ：Thread 重写run方法实现多线程时，这里需要new 多个Therad实现类，所以同步监视器需要Thread的静态实例，或者类名.class
- 情况二：Runable接口重写实现多线程时，这里指new一个Runable实现类，将其作为参数传入多个Thread类中，所以同步监视器只需要非静态变量，或者this

**同步方法**

**如果使用Runnable接口实现时 例子如下：**
public synchronized void method () {}
同步监视器没有明写 ，但是是this

**如果使用Thread类实现时 例子如下：**
public static synchronized void method () {}
同步监视器没有明写 ，但是是类.class

**总结**
- 同步方法仍然涉及到同步监视器，只是不需要我们显式的声明
- 非静态的同步方法，同步监视器都是this
- 静态的同步方法，同步监视器都是 当前类本身
- 要慎用非静态方法添加synchronized实现同步，前提是这个类多线程的情况下只被new一次。

**Lock（锁）**

JDK5.0开始，java提供了更强大的线程同步机制，通过显式定义同步锁对象来实现同步，同步锁使用Lock对象来充当。

java.util.concurrent.locks.Lock接口是控制多个线程对共享资源进行访问的工具。锁提供了对共享资源的独占访问，每次只能有一个线程对Lock对象加锁，线程开始访问共享资源之前应先获得Lock对象。

ReentrantLock类实现了Lock。可以显式的加锁，释放锁。
```java
import java.util.concurrent.locks.ReentrantLock;

public class StudyLock {
    public static void main(String[] args) {
        Window1 window11 = new Window1();
        Thread window1 = new Thread(window11);
        window1.setName("窗口1");
        Thread window2 = new Thread(window11);
        window2.setName("窗口2");
        Thread window3 = new Thread(window11);
        window3.setName("窗口3");
        window1.start();
        window2.start();
        window3.start();
    }

}

class Window1 implements Runnable {
    private static int num = 100;
    // 1.实例化lock 需要保证多个线程用的是同一个对象
    private ReentrantLock lock = new ReentrantLock();// true（先进先出） false 是否公平

    @Override
    public void run() {
        while (true) {
            try {
                // 2.调用lock方法
                lock.lock();
                if (num > 0) {
                    try {
                        Thread.sleep(100);
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                    System.out.println(Thread.currentThread().getName() + "窗口卖了第" + num + "号票");
                    num--;
                } else {
                    System.out.println(Thread.currentThread().getName() + "窗口停止卖票");
                    break;
                }
            } finally {
                // 3.调用解锁方法
                lock.unlock();
            }
        }
    }
}

```

**面试题**：synchronized 和 lock 的异同
相同：都是解决现场安全问题
不同：synchronized 是隐式锁 机制在执行完相应的同步代码以后， 自动的释放同步监视器
		lock 是显式锁 需要手动的去启动同步 同时结束同步也需要手动的实现。jvm将花费更少的时间来调度线程，性能更好，并且具有更好的扩展性（提供更多的子类）。

**死锁**

不同的线程分别占用对方需要同步资源不放弃，都在等待对方放弃自己需要的同步资源，形成了线程的死锁。
出现死锁后，不会出现异常，不会出现提示，只是所有的线程都处于阻塞状态，无法继续。

**线程的通信**

线程通信的例子：设计俩个线程打印1-100 。线程1 线程2 交替打印

涉及到的三个方法
wait : 一旦执行此方法，当前线程就进入阻塞状态，并释放同步监视器。
notify：一旦执行此方法，就会唤醒一个被wait的线程
notifyall：唤醒所有
使用前提：这三个方法必须使用在同步方法或者同步代码块中。
这三个方法的调用者必须是同步代码块或者同步方法中的同步监视器。否则会出现异常。
这三个方法是object的方法，所有类都可以充当同步监视器 就可以调用同步监视器。439

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
