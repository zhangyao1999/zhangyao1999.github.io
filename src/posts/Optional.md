---
icon: file
date: 2025-12-11
category:
  - JAVA
tag:
  - 高級特性
  - Optional
---
# Optional

## 概述

大量的业务代码中有很多关于非空的判断，显得代码臃肿不堪，且程序员经常忘记这一操作。使用Optional可以避免空指针异常。并且很多函数式编程的API中也用到了Optional。
<!-- more -->
## 封装和消费

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

## 获取值

#### orElseGet

`User user = optional.orElseGet(() -> new User());`

安全的获取值 如果option里的值是null 那么就会new User()来返回

#### orElseThrow

`User user1 = optional.orElseThrow((Supplier<Throwable>) () -> new RuntimeException("null"));`

安全的获取值 如果option里的值是null 那么就会抛出异常

## 数据类型转换

map方法对数据类型转换

