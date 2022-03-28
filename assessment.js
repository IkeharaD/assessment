'use strict';
const userNameInput=document.getElementById('user-name');
const assessmentButton=document.getElementById('assessment');
const resultDivided=document.getElementById('result-area');
const tweetDivied=document.getElementById('tweet-area');

assessmentButton.onclick=doAssessment;

onkeydown=(e)=>{
    if(e.key==='Enter')
        doAssessment();
}

function doAssessment(){
    const userName=userNameInput.value;
    if(!userName)
        return;
        resultDivided.innerText='';
    const header=document.createElement('h3');
    header.innerText='診断結果';
    resultDivided.appendChild(header);
    const paragraph=document.createElement('p');
    const result=assessment(userName);;
    paragraph.innerText=result;
    resultDivided.appendChild(paragraph);

    tweetDivied.innerText='';
    const twitterHashtagButton=document.createElement('a');
    twitterHashtagButton.setAttribute('href',`https://twitter.com/intent/tweet?button_hashtag=${encodeURIComponent('あなたのいいところ')}&ref_src=twsrc%5Etfw`);
    twitterHashtagButton.className='twitter-hashtag-button';
    twitterHashtagButton.setAttribute('data-text',result);
    twitterHashtagButton.innerText='Tweet #あなたのいいところ';

    tweetDivied.appendChild(twitterHashtagButton);


    const script=document.createElement('script');
    script.setAttribute('src','https://platform.twitter.com/widgets.js');
    tweetDivied.appendChild(script);
}

const answers=[
    '{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
    '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
    '{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
    '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
    '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
    '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
    '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
    '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
    '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
    '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
    '{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
    '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
    '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
    '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
    '{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。'
];

/**
 * 名前を入力すると診断結果を返す関数です。
 * @param {string} userName ユーザーの名前
 * @return {string} 診断結果
 */
function assessment(userName){
    let sumOfCharCode=0;
    for(let c of userName)
        sumOfCharCode+=c.charCodeAt(0);
    const index=sumOfCharCode%answers.length;
    const result=answers[index].replaceAll('{userName}',userName);
    return result;
}