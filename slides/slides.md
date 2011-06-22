# 俺とknockout.js

!SLIDE

# About Me

# 自己紹介

Perl日誌というブログを書いてるのに最近Perlのお仕事してません。
Perlのお仕事絶賛募集中です。

!SLIDE

# アジェンダ

* (第一部)エコについて
* (第二部)knockout.js

!SLIDE

# 第一部 

エコについて

!SLIDE

俺たちがやっている事がすべからくエコなんじゃないかな...

!SLIDE

第一部 完

!SLIDE

# 第二部 

knockout.js

!SLIDE

# What is Knockout.js?

It’s a Model-View-ViewModel (MVVM) framework for JavaScript/HTML. 

!SLIDE

# それって役に立つの?

!SLIDE

やってみましょう

!SLIDE

    <!doctype html>
    <html lang="ja">
    <head>
      <meta charset="utf-8">
      <title></title>
      <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
      <div id="container">
        The name is <span data-bind="text: personName"></span>
      </div>
      <script src="js/libs/jquery-1.6.1.min.js"></script>
      <script src='js/libs/jquery-tmpl.js'></script>
      <script src="js/libs/knockout-1.2.1.debug.js"></script>
      <script>
      var myViewModel = {
          personName: 'Bob',
          personAge: 123
      };
      ko.applyBindings(viewModel);
      </script>
    </body>
    </html>

!SLIDE

以下demoページへ


