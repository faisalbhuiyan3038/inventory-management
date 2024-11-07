<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->




<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/faisalbhuiyan3038/inventory-management">
    <img src="assets/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Inventory Management With Gemini</h3>

  <p align="center">
    This project aims to simplify the manual process of adding items to inventory and managing them by including the ability to simply take a picture and instantly add the item to Inventory without having to manually type the name.
    <br />
    <br />
    <br />
    <a href="https://inventory-management-6948.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/faisalbhuiyan3038/inventory-management/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3picWtrcWpqMjR0aHFwbTRmbWQwN25idm1xdmhtNmNzeGVtcTY3ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7smSNnV04eRTFVUK4I/giphy.gif" alt="demovid" />

I built this project while doing my fellowship at Headstarter. It was the first project I built to learn how to use Generative AI in apps to improve ease of use.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* <img alt="Next.js" src="https://img.shields.io/badge/-NextJS-000000?style=flat-square&logo=nextdotjs&logoColor=white" />
* <img alt="Node.js" src="https://img.shields.io/badge/-NodeJS-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white" />
* <img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
* <img alt="Firebase" src="https://img.shields.io/badge/-Firebase-DD2C00?style=flat-square&logo=firebase&logoColor=white" />
* <img alt="Google Gemini" src="https://img.shields.io/badge/-Gemini-8E75B2?style=flat-square&logo=googlegemini&logoColor=white" />


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Clone the repo
   ```sh
   git clone https://github.com/faisalbhuiyan3038/inventory-management.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Store your API key in `.env`
   ```js
   const GEMINI_API_KEY = YOUR_API_KEY
   ```
5. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin faisalbhuiyan3038/inventory-management
   git remote -v # confirm the changes
   ```
6. Run the project in development mode.
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Roadmap

- [x] Fetch inventory from firebase
- [x] Add new items to db
- [x] Increase/Decrease quantity of items to db
    - [x] Handle deleting item if quantity 0.
- [x] Implement minimal design
- [x] Implement responsive camera component
- [x] Manage camera devices and image
- [x] Connect Gemini and analyze image

See the [open issues](https://github.com/faisalbhuiyan3038/inventory-management/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
