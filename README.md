# Tutorial: How the Animation On Images and Buttons Works 

This project demonstrates a modern approach to web design by combining **CSS animations**, **JavaScript interactivity**, and a **responsive layout**. Below is a step-by-step explanation of the key features and how they were implemented.

---
## Check out the live demo :computer:

You can check out the live demo of the project [here](https://gur512.github.io/tutorial-project/).


---

## Key Features Explained

### 1. CSS Animations for Visual Appeal
The website uses **CSS keyframe animations** and **hover effects** to create smooth transitions:
- **Entry Animation**: Images fade in and slide upwards when they become visible in the viewport. This is achieved with the `@keyframes` rule applied to the `.visible` class.
- **Hover Effects**: When you hover over an image, it zooms in slightly, and a glowing border appears, giving it a lively, interactive feel.

#### Example Code:
``` css
@keyframes loadEffect {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}


.image-card:hover img {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(238, 44, 86, 0.7), 0 0 30px rgba(238, 44, 86, 0.7);
} 
``` 

### Using Utility Functions
```JavaScript
function select(selector, scope = document) {
    return scope.querySelector(selector);
}

function listen(event, selector, callback) {
    return selector.addEventListener(event, callback);
}
```

### Another example of js:
``` javaScript 
listen(window, 'scroll', () => {
    cardOfImage.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardPosition >= 0 && cardPosition.bottom <= windowHeight) {
            card.classList.add('visible');
        }
    });
}); 
```
### Responsive design
``` css
@media (max-width: 480px) {

    header {
        flex-direction: column;
    }

    .main-content h1 {
        font-size: 3rem;
    }

    .main-content h2 {
        font-size: 3rem;
    }

    .main-content p {
        font-size: 1.5rem;
    }

    .btn-1 {
        font-size: 1.5rem;
        padding: 10px 24px;
    }

    .image-card img {
        height: 300px;
    }

    .image-gallery {
        flex-direction: column; 
        gap: 15px;
    }

    footer {
        margin-top: 0px;
        margin-left: 1rem;
    }

    .footer-links {
        margin-left: 2rem;
    }
}
```

## :wrench: Technologies Used
This project leverages the following technologies to deliver a sleek, responsive, and interactive design:
- **HTML5**: For structuring the content and layout of the web page.
- **CSS3**: For designing the page's appearance, including animations, hover effects, and responsive styling.
- **JavaScript (ES6)**: For adding interactivity and dynamic behavior, such as triggering animations on scroll.
- **Responsive Web Design Principles**: Ensuring the website adjusts seamlessly to different screen sizes.
- **Flexbox**: For efficient layout and alignment of elements.
- **Media Queries**: To adapt the design for mobile and tablet views.

--- 
## Installation :iphone:

Follow these steps to set up the **Word Beat Game** locally on your machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Gur512/tutorial-project.git
