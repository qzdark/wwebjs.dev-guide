---
title: Introduction
description: Introduction to whatsapp-web.js
---

<html>
    <body>
        <ima :src="$withBase('/branding/light/banner_blue_logo.png')" alt="banner_blue_logo.png" id="topMainBanner">
    </body>
    <script>
        const checkbox = document.querySelector("input[name=checkbox]");
        function changeImage() {
            let image = document.getElementById('topMainBanner');
        }
        checkbox.addEventListener("change", (e) => {
            if (e.target.checked) {
                image.src="$withBase('/branding/dark/banner_blue_logo.png')"
            } else {
                image.src="$withBase('/branding/light/banner_blue_logo.png')"
            }
        });
    </script>
    </body>
</html>

# Introduction


## Why `whatsapp-web.js`


## How It Works


## What Is New