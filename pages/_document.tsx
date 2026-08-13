import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class ResumeDocument extends Document {
  render() {
    return (
      <Html lang="ko-KR">
        <Head>
          {/* Step 5: Output the styles in the head  */}
          <meta charSet="utf-8" />
          {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700|Parisienne&display=swap&subset=korean"
            rel="stylesheet"
          />
          <link
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Parisienne&display=swap"
            rel="stylesheet"
          />
          {/* Bootstrap 인쇄용 기본 스타일(.badge 테두리, a 밑줄 강제) 무력화 */}
          <style>{`
            @media print {
              /* 배경색이 인쇄 시 기본적으로 생략되는 것을 방지 (뱃지 배경색 등) */
              html {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
              }

              .badge {
                border: none !important;
              }
              a:not(.btn) {
                text-decoration: none !important;
              }

              /* PDF 렌더링 폭에서 Bootstrap md 반응형 그리드가 인식되지 않아
                 "왼쪽 라벨/이미지 · 오른쪽 본문" 2단 레이아웃이 모바일처럼
                 세로로 쌓이는 문제 보정 — 화면과 동일한 데스크톱 레이아웃을 강제 */
              .col-md-3 {
                flex: 0 0 25% !important;
                max-width: 25% !important;
              }
              .col-md-4 {
                flex: 0 0 33.3333% !important;
                max-width: 33.3333% !important;
              }
              .col-md-9 {
                flex: 0 0 75% !important;
                max-width: 75% !important;
              }
              .text-md-left,
              .text-center.text-md-left {
                text-align: left !important;
              }
              .text-md-right,
              .text-center.text-md-right {
                text-align: right !important;
              }

              /* COMPANY PROJECTS / SIDE PROJECTS / OPEN SOURCE 는 새 페이지에서 시작 */
              .print-page-break {
                break-before: page;
                page-break-before: always;
              }
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
