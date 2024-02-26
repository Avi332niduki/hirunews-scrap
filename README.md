<p align="center">
  <a href="" rel="noopener">
 <img width=100px height=100px src="https://cdn.hirunews.lk/newassets/logo-3.png" alt="Esana"></a>
</p>

<h2 align="center">Hiru News Scrap</h2>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/OminduAnjane/hirunews-scrap.svg)](https://github.com/OminduAnjane/hirunews-scrap/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/OminduAnjane/hirunews-scrap.svg)](https://github.com/OminduAnjane/hirunews-scrap/pulls)
[![License](https://img.shields.io/badge/license-GNU-blue.svg)](/LICENSE)

</div>

---

<p align="center"> The unofficial scrap Hiru News
    <br> 
</p>


## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing


```sh
yarn add hirunews-scrap
```

or

```sh
npm i hirunews-scrap
```

## 🎈 Usage <a name="usage"></a>

```ts
const { BreakingNews, MainNews, TrendingNews, InternationalNews } = require('hirunews-scrap');

async function HiruNewsData() {
    
// usage

}
HiruNewsData();
```
## Get Latest Breaking News
```ts
const breakingNewsData = await BreakingNews();
console.log(breakingNewsData);
```


```ts
{
  code: 200,
  code_creator: {
    name: 'Omindu_Anjana',
    github: '@OminduAnjana',
    Group: 'CyberNex Group'
  },
  results: {
    title: 'රුසියානු - යුක්‍රේන සංචාරකයින් ගැන මහජන ආරක්ෂක අමාත්‍යාංශයෙනුත් පැහැදිලි කිරීමක්',
    desc: '\n' +
      'රුසියානු - යුක්‍රේන සංචාරකයන්ට දින 14 ක් ඇතුළත රටින් පිටවන ලෙසට කිසිදු දැනුම් දීමක් සිදු නොකර ඇති බව මහජන ආරක්ෂක අමාත්‍යාංශයද නිවේදනයක් නිකුත් කරමින් පවසනවා. \n' +
      ' \n' +
      'පූර්ව අමාත්‍ය මණ්ඩල අනුමැතියකින් තොරව රුසියානු සහ යුක්‍රේන සංචාරකයින්ට දින 14ක් ඇතුළත රටින් පිටවිය යුතු බවට කළ දැනුම්දීම සම්බන්ධයෙන් පරීක්ෂණයක් පවත්වන ලෙස ජනාධිපති රනිල් වික්‍රමසිංහද නියෝග කර තිබෙනවා.  \n' +
      ' \n' +
      'මෙම සංචාරකයින් සඳහා මීට පෙර ලබා දී ඇති වීසා දීර්ඝ කිරීම් අවලංගු කිරීමට ශ්‍රී ලංකා රජය නිල වශයෙන් තීරණය කර නොමැති බවයි ජනාධිපති මාධ්‍ය අංශය නිවේදනයක් නිකුත් කරමින් සඳහන් කළේ. \n' +
      ' \n' +
      'මීට පෙර වාර්තා වූයේ මෙරට දීර්ඝකාලීනව ජීවත්වන රුසියානු සහ යුක්රේන සංචාරකයන්ට රට හැර යෑමට ආගමන විගමන දෙපාර්තමේන්තුව විසින් දින 14 ක කාලයක් ලබාදී ඇති බවයි.  \n' +
      ' \n' +
      'ආගමන විගමන පාලකවරයා පසුගිය 22 වනදා සංචාරක අමාත්‍යාංශ ලේකම්වරයාට ලිපියක් යොමුකරමින් මෙම නීතිය පිළිබඳ අදාළ සංචාරකයන් දැනුවත් කරන ලෙසද ඉල්ලා තිබුණා. \n' +
      ' \n' +
      'රුසියානු - යුක්රේන අර්බුදය ආරම්භ වූ 2022 වසරේ පෙබරවාරි 28 වනදා සිට පුරා වසර දෙකක කාලයක් එම රටවලින් මෙරටට පැමිණි සංචාරකයන්ට වීසා කාලය ඉක්මවා තිබියදීත් රට තුළ රැඳී සිටීමට අවසර ලබාදී තිබුණා. \n' +
      ' \n' +
      'කෙසේ වෙතත් ආගමන විගමන පාලකවරයා මීට පෙර සඳහන් කර තිබුණේ රුසියාව සහ ශ්‍රී ලංකාව අතර ඍජු ගුවන් ගමන් මේ වනවිට විධිමත් පරිදි ක්‍රියාත්මක වන අතර, යුක්රේන ජාතිකයන්ටද මෙරටට ඇතුලුවීමට හෝ පිටවීමට පහසුකම් සළසා ඇති බවයි.  \n' +
      ' \n' +
      'ඒ අනුව මෙරට වීසා නොමැතිව රැඳී සිටීමට කාලය ලබාදීම අවශ්‍ය නොවන බවටයි එමගින් සඳහන් කර තිබුණේ. \n' +
      ' \n' +
      'කෙසේ වෙතත් දින 14ක් ඇතුළත රටින් පිටවිය යුතු බවට කළ දැනුම්දීම සම්බන්ධයෙන් පරීක්ෂණයක් පවත්වන ලෙසයි ජනාධිපති රනිල් වික්‍රමසිංහ උපදෙස් ලබාදී ඇත්තේ. \n' +
      ' \n' +
      'එමෙන්ම මහජන ආරක්ෂක අමාත්‍යාංශයද නිවේදනයක් නිකුත් කරමින් සඳහන් කළේ රටින් පිටවන ලෙසට කළ දැනුම් දීම සම්බන්ධයෙන් පුළුල් පරීක්ෂණයක් සිදු කෙරෙන බවයි. ',
    thumb: 'https://cdn.hirunews.lk/Data/News_Images/202402/1708881214_9741960_hirunews.jpg',
    date: 'Sunday, 25 February 2024 - 22:44'
  }
}
```
## Get Latest Main News
```ts
const MainNewsData = await MainNews();
console.log(MainNewsData);
```
```ts
{
  code: 200,
  code_creator: {
    name: 'Omindu_Anjana',
    github: '@OminduAnjana',
    group: 'CyberNex Group'
  },
  results: {
    title: 'ප්‍රදේශ කිහිපයක කාලගුණයේ තාවකාලික වෙනසක්',
    desc: '\n' +
      'නැගෙනහිර සහ ඌව පළාත්වල පවතින වියළි කාලගුණ තත්ත්වයේ තාවකාලික වෙනසක් අද (26) දින සිට අපේක්ෂා කරන බව කාලගුණ විද්‍යා දෙපාර්තමේන්තුව නිවේදනයක් නිකුත් කරමින් පවසනවා. \n' +
      ' \n' +
      'නුවරඑළිය, මාතලේ සහ පොළොන්නරුව දිස්ත්‍රික්කවල විටින් විට වැසි ඇතිවිය හැකි බව එම නිවේදනයේ සඳහන් වෙනවා. \n' +
      ' \n' +
      'නැගෙනහිර සහ ඌව පළාත්වල වැසි වාර කිහිපයක් ඇතිවිමේ හැකියාව පවතිනවා. \n' +
      ' \n' +
      'බස්නාහිර සහ සබරගමුව පළාත්වලත් මහනුවර, ගාල්ල සහ මාතර දිස්ත්‍රික්කවලත් සවස් කාලයේදී හෝ රාත්‍රී කාලයේදී ස්ථාන ස්වල්පයක වැසි හෝ ගිගුරුම් සහිත වැසි ඇතිවිය හැකි බවයි සඳහන් වන්නේ. \n' +
      ' \n' +
      'මධ්‍යම කඳුකරයේ නැගෙනහිර බැවුම් ප්‍රදේශවලත් උතුරු, උතුරු මැද, දකුණු, වයඹ, ඌව සහ නැගෙනහිර පළාත්වලත් විටින් විට තරමක තද සුළං ඇතිවිමේ හැකියාව පවතිනවා. \n' +
      ' \n' +
      'ගිගුරුම් සහිත වැසි සමඟ ඇතිවිය හැකි තාවකාලික තද සුළංවලින් සහ අකුණු මඟින් සිදු වන අනතුරු අවම කර ගැනීමට අවශ්‍ය පියවර ගන්නා ලෙස ජනතාවට කාලගුණ විද්‍යා දෙපාර්තමේන්තුව අවධානය කරනවා.                    ',
    thumb: 'https://cdn.hirunews.lk/Data/News_Images/202402/1708909017_7766547_hirunews.jpg',
    date: 'Monday, 26 February 2024 - 6:29'
  }
}
```
## Get Latest Trending News

```ts
const TrendingNewsData = await TrendingNews();
console.log(TrendingNewsData);
```
```ts
{
  code: 200,
  code_creator: {
    name: 'Omindu_Anjana',
    github: '@OminduAnjana',
    group: 'CyberNex Group'
  },
  results: {
    title: 'ප්‍රදේශ කිහිපයක කාලගුණයේ තාවකාලික වෙනසක්',
    desc: '\n' +
      'නැගෙනහිර සහ ඌව පළාත්වල පවතින වියළි කාලගුණ තත්ත්වයේ තාවකාලික වෙනසක් අද (26) දින සිට අපේක්ෂා කරන බව කාලගුණ විද්‍යා දෙපාර්තමේන්තුව නිවේදනයක් නිකුත් කරමින් පවසනවා. \n' +
      ' \n' +
      'නුවරඑළිය, මාතලේ සහ පොළොන්නරුව දිස්ත්‍රික්කවල විටින් විට වැසි ඇතිවිය හැකි බව එම නිවේදනයේ සඳහන් වෙනවා. \n' +
      ' \n' +
      'නැගෙනහිර සහ ඌව පළාත්වල වැසි වාර කිහිපයක් ඇතිවිමේ හැකියාව පවතිනවා. \n' +
      ' \n' +
      'බස්නාහිර සහ සබරගමුව පළාත්වලත් මහනුවර, ගාල්ල සහ මාතර දිස්ත්‍රික්කවලත් සවස් කාලයේදී හෝ රාත්‍රී කාලයේදී ස්ථාන ස්වල්පයක වැසි හෝ ගිගුරුම් සහිත වැසි ඇතිවිය හැකි බවයි සඳහන් වන්නේ. \n' +
      ' \n' +
      'මධ්‍යම කඳුකරයේ නැගෙනහිර බැවුම් ප්‍රදේශවලත් උතුරු, උතුරු මැද, දකුණු, වයඹ, ඌව සහ නැගෙනහිර පළාත්වලත් විටින් විට තරමක තද සුළං ඇතිවිමේ හැකියාව පවතිනවා. \n' +
      ' \n' +
      'ගිගුරුම් සහිත වැසි සමඟ ඇතිවිය හැකි තාවකාලික තද සුළංවලින් සහ අකුණු මඟින් සිදු වන අනතුරු අවම කර ගැනීමට අවශ්‍ය පියවර ගන්නා ලෙස ජනතාවට කාලගුණ විද්‍යා දෙපාර්තමේන්තුව අවධානය කරනවා.                    ',
    thumb: 'https://cdn.hirunews.lk/Data/News_Images/202402/1708909017_7766547_hirunews.jpg',
    date: 'Monday, 26 February 2024 - 6:29'
  }
}
```
## Get Latest International News

```ts
const InternationalNewsData = await InternationalNews();
console.log(InternationalNewsData);
```
```ts
{
  code: 200,
  code_creator: {
    name: 'Omindu_Anjana',
    github: '@OminduAnjana',
    group: 'CyberNex Group'
  },
  results: {
    title: 'දුර්ලභ කැස්බෑ විශේෂයක් ඉන්දියාවෙන් හමුවෙයි',
    desc: '\n' +
      'දුර්ලභ කැස්බෑ විශේෂයකගේ පළමු අභිජනන ගහනය ඉන්දියාවෙන් සොයා ගැනීමට පෝර්ට්ස්මූත් විශ්වවිද්‍යාලය ප්‍රමුඛ සංරක්ෂණවේදීන් කණ්ඩායමක් සමත් වී තිබෙනවා. \n' +
      ' \n' +
      'මොවුන් දකුණු හා අග්නිදිග ආසියාවේ ගංගාවලට ආවේණික වූ විශේෂය බරපතළ ලෙස වඳවීමේ තර්ජනයට ලක්ව ඇති විශේෂයක් වනවා. \n' +
      ' \n' +
      'සාම්ප්‍රදායික පාරිසරික සමීක්ෂණ ක්‍රම භාවිතා කරමින් මෙම කැස්බෑවන් සොයා ගැනීම අසාර්ථක වීම නිසා මෙම කණ්ඩායම දේශීය දැනුම සහ ඓතිහාසික දර්ශන භාවිතා කරමින් ඔවුන් සොයා ගැනීමට සිදුකළ උත්සාහයක ප්‍රතිඵලයක් අතරතුරයි මෙලෙස මෙම කැස්බෑවන් සොයා ගෙන ඇත්තේ. \n' +
      ' \n' +
      'පරීක්ෂකවරුන්ට හමු වූ ගොඩබිමට ගසා ගෙන ඇවිත් තිබූ බිත්තර කූඩු මුදවා ගෙන යලිත් ගංගාව වීත මුදා හැර තිබෙනවා. \n' +
      ' \n' +
      'මෙම කැස්බෑවන් සිටින ස්ථානය ආසන්නයේ අභිජනනාගාරයක් සහ තවානක් පිහිටුවීමට ද මෙම කණ්ඩායම පියවර ගනිමින් සිටින බවයි වාර්තා වෙන්නේ. \n' +
      ' \n' +
      'Cantor’s giant softshell කැස්බෑවන් මිරිදියවල ජීවත් වන අතර, වැඩුණු සත්ත්වයෙක් මීටර 1ක් පමණ දිගින් සහ කිලෝග්‍රෑම් 100ක් පමණ බරින් යුතු වනවා.',
    thumb: 'https://cdn.hirunews.lk/Data/News_Images/202402/1708623985_4382757_hirunews.jpg',
    date: 'Thursday, 22 February 2024 - 23:16'
  }
}
```

## Get News

```ts
const { MainNews } = require('hirunews-scrap');

async function HiruNewsData() {
    try {
        const MainNewsData = await MainNews();
        console.log(MainNewsData);
       
    } catch (error) {
        console.error('Error getting breaking news data:', error.message);
    }
}

HiruNewsData();
```
```ts
{
  code: 200,
  code_creator: {
    name: 'Omindu_Anjana',
    github: '@OminduAnjana',
    group: 'CyberNex Group'
  },
  results: {
    title: 'ප්‍රදේශ කිහිපයක කාලගුණයේ තාවකාලික වෙනසක්',
    desc: '\n' +
      'නැගෙනහිර සහ ඌව පළාත්වල පවතින වියළි කාලගුණ තත්ත්වයේ තාවකාලික වෙනසක් අද (26) දින සිට අපේක්ෂා කරන බව කාලගුණ විද්‍යා දෙපාර්තමේන්තුව නිවේදනයක් නිකුත් කරමින් පවසනවා. \n' +
      ' \n' +
      'නුවරඑළිය, මාතලේ සහ පොළොන්නරුව දිස්ත්‍රික්කවල විටින් විට වැසි ඇතිවිය හැකි බව එම නිවේදනයේ සඳහන් වෙනවා. \n' +
      ' \n' +
      'නැගෙනහිර සහ ඌව පළාත්වල වැසි වාර කිහිපයක් ඇතිවිමේ හැකියාව පවතිනවා. \n' +
      ' \n' +
      'බස්නාහිර සහ සබරගමුව පළාත්වලත් මහනුවර, ගාල්ල සහ මාතර දිස්ත්‍රික්කවලත් සවස් කාලයේදී හෝ රාත්‍රී කාලයේදී ස්ථාන ස්වල්පයක වැසි හෝ ගිගුරුම් සහිත වැසි ඇතිවිය හැකි බවයි සඳහන් වන්නේ. \n' +
      ' \n' +
      'මධ්‍යම කඳුකරයේ නැගෙනහිර බැවුම් ප්‍රදේශවලත් උතුරු, උතුරු මැද, දකුණු, වයඹ, ඌව සහ නැගෙනහිර පළාත්වලත් විටින් විට තරමක තද සුළං ඇතිවිමේ හැකියාව පවතිනවා. \n' +
      ' \n' +
      'ගිගුරුම් සහිත වැසි සමඟ ඇතිවිය හැකි තාවකාලික තද සුළංවලින් සහ අකුණු මඟින් සිදු වන අනතුරු අවම කර ගැනීමට අවශ්‍ය පියවර ගන්නා ලෙස ජනතාවට කාලගුණ විද්‍යා දෙපාර්තමේන්තුව අවධානය කරනවා.                    ',
    thumb: 'https://cdn.hirunews.lk/Data/News_Images/202402/1708909017_7766547_hirunews.jpg',
    date: 'Monday, 26 February 2024 - 6:29'
  }
}
```
## Hiru News All types of news coming soon

```ts
Hiru News All types of news coming soon
```
## ✍️ Authors <a name = "authors"></a>

- [@OminduAnjane](https://github.com/OminduAnjane/hirunews-scrap) - Hiru News Unofficial scraped project author
