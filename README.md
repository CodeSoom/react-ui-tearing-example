# 리액트 UI tearing example

[demo](https://github.com/CodeSoom/react-ui-tearing-example/assets/14071105/6cdd9e23-b73b-49de-966e-6d9d75365767)

Posts 탭을 클릭하여 렌더링 되는 중에 글로벌 상태인 localStorage의 색깔을
변경하면, UI tearing이 일어납니다.  

대신 `color.js`파일에 있는 코드를 사용해서 `useSyncExternalStore`를 사용하면 UI
tearing현상이 일어나지 않습니다.

## 설치

```bash
npm install
```

## 실행

```bash
npm run dev
```
