---
title: "출력 입문 퀴즈"
date: 2026-07-04
description: "print() 함수의 기본 동작과 문자열 출력 이해"
tags: ["출력", "Python", "기초"]
category: "코딩테스트"
subcategory: "코드트리"
subsubcategory: "codetree101"
series: "codetree101"
draft: false
---

## 문제 정보

- **출처**: 코드트리 — CodeTree 101
- **링크**: [출력 입문 퀴즈](https://www.codetree.ai/ko/trails/complete/curated-cards/nl-pre-output-basics/description)

---

## 핵심 개념

### print() 함수

Python에서 화면에 값을 출력하는 기본 함수다.

```python
print(출력할_내용)
```

- 괄호 안의 내용을 콘솔에 출력하고, 자동으로 줄바꿈(`\n`)을 추가한다.
- 문자열은 큰따옴표(`"`) 또는 작은따옴표(`'`)로 감싼다.

### 문자열 리터럴

따옴표로 감싼 텍스트를 **문자열(string)** 이라고 한다.  
출력 시 따옴표는 포함되지 않고, 안의 내용만 그대로 출력된다.

---

## 접근 방식

`print("Programming is fun")` 실행 흐름:

1. Python이 `print()` 함수 호출
2. 인자로 전달된 문자열 `"Programming is fun"`을 화면에 출력
3. 따옴표는 문자열을 감싸는 기호 — 출력 결과에는 포함되지 않음

---

## 풀이 코드

```python
# print()에 문자열을 전달하면 따옴표 없이 내용만 출력됨
# 대소문자, 띄어쓰기 포함 정확히 그대로 출력
print("Programming is fun")
```

**출력 결과:**

```
Programming is fun
```

---

## 시간 / 공간 복잡도

| 구분 | 복잡도 | 이유 |
|---|---|---|
| 시간 | O(1) | 단순 출력, 입력 크기와 무관 |
| 공간 | O(1) | 추가 메모리 사용 없음 |

---

## 노하우 & 주의사항

- 따옴표 안의 내용이 **그대로** 출력된다. 대소문자와 띄어쓰기 모두 동일하게 적용됨.
- `"Programming is fun"` ≠ `"programming is fun"` — Python은 대소문자를 구분함.
- 다른 언어와 대응 관계:

| 언어 | 출력 함수 |
|---|---|
| Python | `print()` |
| C++ | `cout <<` / `printf()` |
| Java | `System.out.println()` |
