---
title: "2줄 출력"
date: 2026-07-04
description: "print() 여러 번 호출로 다중 줄 출력 이해"
tags: ["출력", "Python", "기초"]
category: "코딩테스트"
subcategory: "코드트리"
subsubcategory: "codetree101"
series: "codetree101"
draft: false
---

## 문제 정보

- **출처**: 코드트리 — CodeTree 101
- **링크**: [2줄 출력](https://www.codetree.ai/ko/trails/complete/curated-cards/nl-pre-output-basics-1/description)

---

## 핵심 개념

### print() 와 자동 줄바꿈

`print()`는 호출될 때마다 출력 후 자동으로 줄바꿈(`\n`)을 추가한다.

```python
print("A")  # → "A\n"
print("B")  # → "B\n"
```

결과:
```
A
B
```

### end 파라미터

`print()`의 기본 줄바꿈 동작은 `end='\n'` 때문이다. 변경하면 동작이 달라진다.

```python
print("A", end="")   # 줄바꿈 없이 "A"만 출력
print("B", end="\n") # 기본값과 동일
```

---

## 접근 방식

`Hello`와 `World`를 각각 다른 줄에 출력하려면:

1. `print("Hello")` 호출 → `Hello` 출력 + 자동 줄바꿈
2. `print("World")` 호출 → `World` 출력 + 자동 줄바꿈

`print()`를 두 번 호출하면 자동으로 2줄이 된다.

---

## 풀이 코드

```python
# 첫 번째 호출: "Hello"를 출력하고 \n 자동 추가
print("Hello")
# 두 번째 호출: "World"를 출력하고 \n 자동 추가
print("World")
```

**출력 결과:**

```
Hello
World
```

---

## 시간 / 공간 복잡도

| 구분 | 복잡도 | 이유 |
|---|---|---|
| 시간 | O(1) | 고정된 2회 출력, 입력 없음 |
| 공간 | O(1) | 추가 메모리 사용 없음 |

---

## 노하우 & 주의사항

- `print()`를 한 번만 호출하면서 2줄을 출력하는 방법도 있다.

```python
print("Hello\nWorld")  # \n으로 직접 줄바꿈 삽입
```

- 대소문자를 정확히 맞춰야 한다. `hello`와 `Hello`는 다른 출력이다.
- 공백이 들어가지 않도록 주의. `"Hello "` ≠ `"Hello"`
