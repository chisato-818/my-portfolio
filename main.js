const cardsContainer = document.getElementById("text-1");
const cardsContainer2 = document.getElementById("text-2");
const cardsContainer3 = document.getElementById("text-3");
const addButton = document.getElementById("add-button");
const addButton2 = document.getElementById("add-button-2");
const addButton3 = document.getElementById("add-button-3");

addButton.onmouseover = function (number) {
  const naiyou = document.createElement("div");
  naiyou.className = "naiyou";
  naiyou.textContent =
    "スキーサークル。浪人時代、CMで流れてたJRSKISKIの伊藤健太郎がかっこ良すぎて、大学ではウィンタースポーツサークルに入ることを決意。最初はスノボサークルに入ろうとするも、ネイルの長さが３cmある先輩が怖く入るのを断念。ゲレンデマジックを期待するも、だいたい彼女持ち。お酒大好き飲みさーです。";

  cardsContainer.append(naiyou);
};

addButton2.onmouseover = function () {
  const naiyou2 = document.createElement("div");
  naiyou2.className = "naiyou2";
  naiyou2.textContent =
    "高校で演劇をやっていて楽しかったので、大学でも演劇を続けることに。普通の演劇サークルかと思ったら「コメディ演劇サークル」に入ってしまい、”面白い”を追求する日々。学祭公演は大学生活1番頑張ったと言っても過言ではない。どんなにきつくても、本番をやり切った後の達成感は何よりも最高です。";

  cardsContainer2.append(naiyou2);
};

addButton3.onmouseover = function () {
  const naiyou3 = document.createElement("div");
  naiyou3.className = "naiyou3";
  naiyou3.textContent =
    "法政大学を目指すきっかけ。就職しようと考えていたが、夏休みの宿題でオープンキャンパスに参加し学生さんの生き生きした雰囲気に一目惚れ。今では自分が高校生に大学内を案内しています。1人でも多くの人に「法政大学に行きたい」と思ってもらえるよう、夏休みはオープンキャンパスの活動一色です。";

  cardsContainer3.append(naiyou3);
};
