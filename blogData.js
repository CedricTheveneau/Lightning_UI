const blogData = [
  {
    title: "V1.0.2 - Macroburst",
    summary:
      "<p>A huge optimization update was due, and it's finally here !</p>",
    tags: "<span class='tag release'>Release</span>",
    date: "<p>-&nbsp;&nbsp; November 12, 2023</p>",
    content:
      "<p>I still had plenty of things to do last time I pushed an update. I specifically noted that the library still needed to be fully optimized.</p><p><span>I'm truly proud to say that today marks a huge leap forward when it comes to the library's optimization !</span></p><p>I've worked hard to bring this project to new heights, and I can now officially say that it passed Google's Lighthouse report with respective scores of :</p><br/><ul><li><span>99% Performance,</span></li><li><span>100% Accessibility,</span></li><li><span>100% Best practice</span></li><li>and <span>92% SEO</span> - Wouhouuu !!</li></ul><br/><p>Keep in mind that this score may vary, depending on wether you conduct tests in Icognito mode - exensions will be disabled - or not.</p><p>But Lighthouse isn't enough for me. As I'm really worried about my projects' environmental impact, I checked out its <a href='https://muchas-glacias.com/' title='Have a look at LaBanquise's website'>LaBanquise</a> score. It's a more difficult test to pass, but it did failry well - I plan on optimizing the library even more in the future - with the following scores :</p><br/><ul><li><span>83% Ecology,</span></li><li><span>76% Performance,</span></li><li><span>95% Accessibility,</span></li><li><span>100% Best practices</span></li><li><span>and 90% SEO.</span></li></ul><br/><p>The website also gives two indexes, which are :<p><br/><ul><li><span>Pepper Index - How efficient is the website</span></li><li><span>and a Carbon Index - How much it pollutes.</span></li></ul><br/><p><span>I obtained an 86.4% Pepper Index and 0.06g of emited CO2 - Which is cleaner than 97% of tested websites !</span></p><br/><p>Those are very encouraging numbers and I hope we'll reach even better ones in the future !</p><p>Once again, thank you for taking some of your precious time to read those lines, sincerely.</p><br/><p>Cédric, founder of Lightning UI</p>",
    img: "../assets/logoLight.svg",
  },
  {
    title: "V1.0.1 - Macroburst",
    summary: "<p>The first big update to the library is here !</p>",
    tags: "<span class='tag release'>Release</span>",
    date: "<p>-&nbsp;&nbsp; November 4, 2023</p>",
    content:
      "<p>I promised myself to give everyone a fully functionnal version of the library by the end of the week. It's now done.</p><p>I fixed all the main issues I came across, implemented new features, corrected some mistakes here and there and added all the missing content to the <a href='../pages/components.html' title='Access the components page'>Components page</a>.</p><p>You now have access to a much richer library of components, that are eye-catching, easy to customize, responsive and robust.</p><p>Of course, I must have missed some things, so if you notice anything odd, don't hesitate and let me know ! - See the <a href='../pages/contact.html' title='Access the contact page'>Contact page</a> for more details about contacting me</p><p>Once again, thank you for taking some of your precious time to read those lines, sincerely.</p><br/><p>Cédric, founder of Lightning UI</p>",
    img: "../assets/logoLight.svg",
  },
  {
    title: "V1.0 - Macroburst",
    summary:
      "<p>It's finally time to announce that the very first version of Lightning UI is out !</p><p>The project now has an MIT License and a Notice, which means everyone, from now on, can start using Lightning UI as a components library.</p>",
    tags: "<span class='tag release'>Release</span>",
    date: "<p>-&nbsp;&nbsp; November 2, 2023</p>",
    content:
      "<p>Yes, it's official. Yesterday, while updating the README.md file, I stated that I was doing some research regarding licensing, to find the right license to pick for this project.</p><p>After hours and hours of looking around, asking ChatGPT, exploring forums and finally finding some well written and documented articles, I decided to pick an MIT License. Easy to understand, permissive, nothing to worry about, straight forward and quick to set up; it seems to be the best suited one for this library.</p><p>I hesitated with the Apache 2.0 License, but it seemed a bit too much for a simple component library, I took my decision after looking for popular softwares that used one of those license. In the end, most libraries/frameworks use an MIT License, so I decided to go with it.</p><p>Thanks for reading this, I hope Lightning UI will be useful to you, sincerely.</p><br/><p>Cédric, founder of Lightning UI</p>",
    img: "../assets/logoLight.svg",
  },
  {
    title: "Lightning UI's deep dive",
    summary:
      "<p>This post will focus on how is built this brand new library, its website and how it works. Finally I'll talk about the sister app that will be launched at a later date, using this very library.</p>",
    tags: "<span class='tag feature'>Feature</span>",
    date: "<p>-&nbsp;&nbsp; November 1, 2023</p>",
    content:
      "<p>So, a quick recap regarding the technology behind Lightning UI as well as hints at how to customize it to your liking.</p><p>Lightning UI is built with CSS, mainly using variables to make it easier and quicker to switch up. The code is nested, for a more robust yet strict layout styling. I'll work later on making it less strict. But for now, I'd suggest using the given components only, for a quick setup without too much work.</p><p>Of course, switching things up is absolutely doable, though it might take some time, considering the code is nested and I'm the one who's written it. Don't worry, I plan on working on various other blocks with time, just not right now.</p><p>It's a work in progress that takes lots and lots of time, especially when working on it alone.</p><p>There's also some JS with the library : a file containing all the functions that make the carousel, theme selection and various other animations work. You can tweak it if you want, or even expend on it and add features you might need, feel free to do so. Same goes for the CSS file, obviously.</p><p>There's also a second file, directly added to it, with a ready to use template for blogging. It's actually the one i'm using right now to create this post. It's not the most sofisticated one, but it works, and is simple to use for people that aren't too familiar with JS. Which is one of my main focus.</p><br/><p>Now, regarding the sister app. This whole project is originally for a project of mine, made to decrease integration time, to have more time to work on actual features. - To be honest, creating a library from scratch is pretty time consumming haha</p><p>The sister app is my graduation project, named Workout Buddy, it will be a PWA, made with React, and it'll use this library. It'll be part of a website, presenting the app and everything there's to know about it. And of course, the web app will also be hosted on this website, benefiting from the library as well.</p><p>As you can imagine, there's still plenty of work waiting for me, and this library will benefit from it over time, with plenty of new app-designed components that will join the ever growing <a href='../pages/components.html' title='Access the component page'>Components</a> section.</p><p>I can't wait to present that other porject and talk about it more freely. For now, I must keep my mouth shut so I don't disappoint anyone.</p><p>As always, thanks for reading this post, sincerely.</p><br/><p>Cédric, founder of Lightning UI</p>",
    img: "../assets/logoLight.svg",
  },
  {
    title: "Lightning UI's launch",
    summary:
      "<p>In this post, you'll learn more about the launch of Lightning UI and get info about the project as a whole.</p>",
    tags: "<span class='tag release'>Release</span>",
    date: "<p>-&nbsp;&nbsp; November 1, 2023</p>",
    content:
      "<p>I'm really excited to say that the release of the first version of Lightning UI is closer than ever ! I've worked really hard and It really is an incredible feeling that I'm experiencing right now as the first product of my own is about to be released to everyone !</p><p>Once again, thank you for taking the time read those lines and learning about this project. It means the world to me !</p><p>It's just the beginning though, I still have plenty of work ahead of me. Regarding this very lirary and all my other porjects as well.</p><p>I hope that you're just as excited as I am for the release of this new possibility among the vast ocean of components library available already. I can't promise that mine will be the perfect response for all your needs, but I've poored all my heart in it, and I plan on improving it over time, based on feedbacks and my own use of it through time.</p><p>For the time being, I thank every single person that will use it and wish you good luck with all your projects that will depend on it.</p><p>I'm looking forwrd to the future releases and the improvements they'll bring. I'll do my very best, so please wish me good luck !</p><p>Thanks for reading this very first post, sincerely.</p><br/><p>Cédric, founder of Lightning UI</p>",
    img: "../assets/logoLight.svg",
  },
];
