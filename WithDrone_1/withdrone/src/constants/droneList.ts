import mavic3 from "../img/mavic3.jpg";
import x14w from "../img/x14w.jpg";
import x7 from "../img/x7.jpg";
import fqs3 from "../img/fqs3.jpg";
import x9 from "../img/x9.jpg";
import wds132 from "../img/wds132.jpg";
import wds7 from "../img/wds7.jpg";
import x380 from "../img/x380.png";
import voyager4 from "../img/voyager4.jpg";
import x8 from "../img/x8.jpg";
import m30 from "../img/m30.jpg";
import mini3 from "../img/mini3.jpg";
import m600 from "../img/m600.jpg";
import air2s from "../img/air2s.jpg";
import mavic2 from "../img/mavic2.jpg";
import t18 from "../img/t18.jpg";
import e616s from "../img/e616s.jpg";
import zealot from "../img/zealot.png";
import zino from "../img/zino.jpg";
import z3 from "../img/z3.jpg";
import w1 from "../img/w1.jpg";

const droneList = [
  {
    keys: 1,
    name: "Alien X250",
    price: "69,000￦",
    category: "취미용",
    isSell: true,
    companyName: "XK",
    description:
      "원 키 360도 공중회전\n원 키 리턴(페일 세이프티 기능)\n최대 조종 가능 범위 300m\n저전압 알림 기능\n긴 비행 시간(8~15분) 및 LED 장착",
    image: mavic3,
  },
  {
    keys: 2,
    name: "X14W",
    price: "83,000￦",
    category: "촬영용",
    isSell: true,
    companyName: "Syma",
    description:
      "자이로센서 탑재\n원 키 360도 공중회전\n자동 고도유지\n사진 및 동영상 촬영\n실시간 FPV",
    image: x14w,
  },
  {
    keys: 3,
    name: "SKD X7",
    price: "62,000￦",
    category: "취미용",
    isSell: true,
    companyName: "FLYTEC",
    description: "DIY 레고 블럭 드론\n원 키 360도 공중회전\n헤드리스 드론\n",
    image: x7,
  },
  {
    keys: 4,
    name: "FQS3",
    price: "49,000￦",
    category: "입문용",
    isSell: true,
    companyName: "FUQI",
    description: "조립용 드론\n3d 플립 비행\n6축 자이로\n원 키 리턴",
    image: fqs3,
  },
  {
    keys: 5,
    name: "SKD X9 Blackbird",
    price: "64,000￦",
    category: "취미용",
    isSell: true,
    companyName: "Worldsky",
    description:
      "자동 고도유지\n3d 플립비행\n헤드리스 모드\n원키 이착륙 및 리턴\n3단계 속도조절\n강제 비행정지",
    image: x9,
  },
  {
    keys: 6,
    name: "WDS132",
    price: "40,000￦",
    category: "취미용",
    isSell: true,
    companyName: "FLYTEC",
    description:
      "땅에서는 자동차모드, 하늘에선 드론모드\n원 키 리턴\n스피드 조절\n3d 플립비행\n헤드리스",
    image: wds132,
  },
  {
    keys: 7,
    name: "WDS7",
    price: "189,000￦",
    category: "촬영용",
    isSell: true,
    companyName: "FLYTEC",
    description:
      "HD 카메라\n2.4Ghz RC\n6축 자이로\nH/L 스피드\n헤드리스 모드\nLED\n자동 고도 유지",
    image: wds7,
  },
  {
    keys: 8,
    name: "X380",
    price: "890,000￦",
    category: "촬영용",
    isSell: true,
    companyName: "XK",
    description:
      "GPS 탑재\n오토 호버링&써클 호버링\n자동 이·착륙\n슈퍼 헤드리스 모드",
    image: x380,
  },
  {
    keys: 9,
    name: "Voyager 4",
    price: "7,000,000￦",
    category: "촬영용",
    isSell: true,
    companyName: "Walkera",
    description:
      "유심을 이용한 무선망 데이터 통신\n멀티 네트워크 감시 정찰 시스템\n전방위 커버 짐벌\n4K 촬영이 가능한 18배 줌렌즈\nGPS / GLONASS 두 가지 위치 인식 시스템",
    image: voyager4,
  },
  {
    keys: 10,
    name: "X8 Pro",
    price: "220,000￦",
    category: "취미용",
    isSell: true,
    companyName: "SYMA",
    description:
      "자동 카메라 앵글 조정\n완벽한 정지비행\n원 키 리턴\n신호 차단 시 자동 복귀\n저전압 자동 복귀\n써클 궤도비행, 팔로우미, 경로비행",
    image: x8,
  },
  {
    keys: 11,
    name: "Mavic 3 CINE Premium Combo",
    price: "7,700,000￦",
    category: "촬영용",
    isSell: true,
    companyName: "DJI",
    description:
      "4/3 CMOS Hasselbla Camera\n5.1K 동영상\n최대 46분 비행\n전방향 장애물 감지\n15km 동영상 전송\n고급 RTH",
    image: mavic3,
  },
  {
    keys: 12,
    name: "Matrice 30",
    price: "9,999＄",
    category: "상업용",
    isSell: true,
    companyName: "DJI",
    description:
      "강력한 비행 성능\n환경 적응성\n안전성과 신뢰성\n다중 시스템 및 백업 시스템\n강화된 전송 시스템\n가벼운 무게\n뛰어난 휴대성\n최고 성능의 카메라",
    image: m30,
  },
  {
    keys: 13,
    name: "Mini 3 Pro",
    price: "1,163,000￦",
    category: "상업용",
    isSell: true,
    companyName: "DJI",
    description:
      "경량 & 쉬운 안전 비행\n더 좋아진 안전성\n4k/60fps 촬영 가능\n원탭 인텔리전트 기능\n최대 34분 비행\n트루 버티컬 촬영 지원",
    image: mini3,
  },
  {
    keys: 14,
    name: "Matrice M600",
    price: "6,600,000￦",
    category: "상업용",
    isSell: true,
    companyName: "DJI",
    description:
      "A3 프로 비행 컨트롤러\n완벽한 통합 및 비교할 수 없는 간편함\n6개의 배터리 동시 충전",
    image: m600,
  },
  {
    keys: 15,
    name: "AIR 2S",
    price: "1,586,000￦",
    category: "상업용",
    isSell: true,
    companyName: "DJI",
    description:
      "4k/60fps 촬영 가능\n넓은 다이나믹 레인지, 고해상도, 높은 컬러 재현 정확도\n10-bit Dlog-M 컬러 프로필을 이용한 10억 개 색상\nRAW 형식 사진 지원, 스마트 HDR\n하이퍼랩스 & 파노라마\n인텔리전트 기능",
    image: air2s,
  },
  {
    keys: 16,
    name: "Mavic 2 Enterprise Advanced",
    price: "3,500,000￦",
    category: "상업용",
    isSell: true,
    companyName: "DJI",
    description:
      "접이식의 컴팩트한 휴대용 드론\n저조도 환경에서 시야를 밝혀주는 듀얼 스포트라이트\nM2E 스피커, 비콘\n안전한 비행\n향상된 이미지 시스템, 타임스탬프 추가\n자체 발열 배터리",
    image: mavic2,
  },
  {
    keys: 17,
    name: "T18",
    price: "견적 문의",
    category: "교육용",
    isSell: true,
    companyName: "Prex",
    description:
      "암 고정 홀더\n안정적인 비행고도와 자세제어 유지를 위한 모듈 탑재\n듀얼 GPS 안테나\nLED",
    image: t18,
  },
  {
    keys: 18,
    name: "E616S-ED",
    price: "견적 문의",
    category: "교육용",
    isSell: true,
    companyName: "",
    description:
      "1종 교육용 전용 드론\n완벽 방수 지원\n히든 파워보드\n견고한 플러그 홀더",
    image: e616s,
  },
  {
    keys: 19,
    name: "Zealot X Pro",
    price: "81,000￦",
    category: "취미용",
    isSell: true,
    companyName: "Zealot",
    description:
      "200만 화소, HD 화질, 120도 광각\n오토 호버링\n헤드리스 모드\n스마트폰 조종\n3단계 속도조절\n",
    image: zealot,
  },
  {
    keys: 20,
    name: "Zino",
    price: "500,000￦",
    category: "촬영용",
    isSell: true,
    companyName: "Hubsan",
    description: "접이식 디자인\n4K 촬영\n3축 기계식 짐벌",
    image: zino,
  },
  {
    keys: 21,
    name: "Z3",
    price: "98,000￦",
    category: "취미용",
    isSell: true,
    companyName: "SYMA",
    description: "광센서를 이용한 호버링\n접이식 디자인\n대용량 배터리",
    image: z3,
  },
  {
    keys: 22,
    name: "W1 Pro",
    price: "250,000￦",
    category: "취미용",
    isSell: true,
    companyName: "SYMA",
    description:
      "4K 카메라\nGPS 트래킹 및 원 키 리턴\n서클, 경로, 코스 비행 및 휴먼 트래킹",
    image: w1,
  },
] as const;

export default droneList;
