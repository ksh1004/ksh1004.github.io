# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 프로젝트 개요

**IntelligenceView** — 한반도 OSINT 모니터링 대시보드.
한국·북한 관련 공개 정보를 자동 수집·저장하고, 실시간 대시보드로 시각화하는 서비스.

---

## 역할 정의

너는 나의 AI 신입사원이야. 나는 사장. 방향은 내가 정하고, 실행은 네가 해.
내가 이해 못하면 터미널을 한 번도 안 만져본 사장한테 설명하듯 말해.
**코드 작성 시 주석을 꼼꼼히 달아서 초보자도 바로 이해할 수 있게 작성해.**

---

## 아키텍처

```
tools/              ← 각 데이터 소스별 수집 Python 스크립트
workflows/          ← 업무 매뉴얼 (실행 순서, 주의사항)
data/               ← SQLite DB 저장소 (intelligence.db)
.tmp/               ← 임시 파일 (언제든 삭제 가능)
.env                ← API 키 (여기에만, 절대 커밋 금지)
```

**패턴:** `workflows/` 읽기 → 맞는 `tools/` 고르기 → 실행 → DB 저장

---

## 수집 데이터 소스 (구현 완료 — Phase A)

| 카테고리 | 파일 | 주요 소스 | 키 |
|----------|------|-----------|----|
| 뉴스/분쟁 | `tools/collect_news.py` | RFA·NK News·Daily NK·연합·38North·Bellingcat·ISW·KCNA Watch RSS + GDELT | ❌ |
| OSINT 정보 | `tools/collect_telegram.py` | 공개 OSINT 텔레그램(t.me/s): bellingcat·DeepStateUA·wartranslated 등 | ❌ |
| 지진/핵실험 | `tools/collect_seismic.py` | USGS Earthquake | ❌ |
| 항공기 | `tools/collect_military_air_sea.py` | OpenSky Network (MarineTraffic은 미사용) | ❌ |
| 위성 | `tools/collect_satellite.py` | CelesTrak TLE + SGP4 궤도계산 | ❌ |
| 선박/함정 | `tools/collect_marine.py` | AISStream.io (websocket) | ⚠️ 무료 |
| 산불/열감지 | `tools/collect_military_ground.py` | NASA FIRMS | ⚠️ 무료 |
| 사이버 위협 | `tools/collect_cyber.py` | Feodo Tracker (abuse.ch) + ip-api 지오로케이션 | ❌ |
| 날씨 | `tools/collect_weather.py` | Open-Meteo (서울·평양·부산·인천·원산) | ❌ |
| 번역 | `tools/translate.py` | 무료 자동번역(외국어→한글, 캐시) | ❌ |
| DB 저장 | `tools/save_to_db.py` | SQLite (entities/tracks/events) | — |
| CZML 내보내기 | `tools/export_czml.py` | DB → data/czml/latest.czml (4D 화면용) | — |
| 전체 실행 | `run_collector.py` | 8종 실행 + `--loop` 실시간 자동 반복 | — |

> 키 없으면 해당 수집기만 자동 건너뜀(graceful skip). 유료 API 0개.
> 데이터는 시간+위치를 붙여 저장 → CesiumJS가 CZML을 타임라인으로 4D 재생.

---

## 개발 명령어

```bash
# 패키지 설치
pip install -r requirements.txt

# 전체 수집 1회 실행
python run_collector.py

# 실시간 자동 반복 (멈춤=Ctrl+C)
python run_collector.py --loop

# 개별 수집기 테스트
python tools/collect_news.py
python tools/collect_telegram.py
python tools/collect_seismic.py
python tools/collect_satellite.py
python tools/collect_marine.py
python tools/collect_military_ground.py
python tools/collect_cyber.py
python tools/collect_weather.py
```

---

## 규칙

- **새로 만들기 전에 `tools/` 먼저 확인** — 재사용 가능한 Tool이 있으면 그걸 써
- **유료 API 재실행 전 반드시 사장한테 먼저 물어봐**
- **Workflow는 내 허락 없이 새로 만들거나 삭제하지 마**
- 에러 시: 에러 읽기 → Tool 고치기 → 확인 → Workflow 업데이트
- 보고 시: 기술 강의 말고, 결정에 필요한 것만 간결하게
