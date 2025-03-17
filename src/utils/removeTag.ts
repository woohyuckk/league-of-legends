/**
/* '<mainText><stats>기본 마나 재생 <attention>50%</attention></stats><br><br></mainText>'
 * 위와 같은 plaintext의 html tag를 제거하는 utility 함수입니다.
 */

export const removeTag = (plaintext: string) => {
  return plaintext.replace(/<[^>]+>/g, "");
};
