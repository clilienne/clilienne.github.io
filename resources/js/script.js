document.addEventListener('DOMContentLoaded', function () {
    var typedText = document.getElementById('typed-text');

    var imageContainer = document.getElementById('image-container');
    var imageContainer1 = document.getElementById('image-container-1');
    var imageContainer3 = document.getElementById('image-container-3');
    var imageContainer4 = document.getElementById('lilienne');
    var imageContainer5 = document.getElementById('veille');
    var backgroundMusic = document.getElementById('background-music');
    var messages = [
        "Hi, Lilienne.",
        "As the year comes to a close,",
        "there's something I want to share with you.",
        "Sit tight and relax po hehe.",
        "So... this is me before we meet.",
        "pogi ba...",
        "paano pa kaya yung naglalaro? joke 😝",
        "...",
        "But then, we met,",
        "and everything changed.",
        "...",
        "This is you on the first day we met",


        "gandaaaaaaaaaaaaaaaa! 💜",
        "pero hindi ako magpapatalo, eto yung sa 'kin hehe",
        "pogi noooooo? HAHAHAHAHAHAHA",
        "may napansin ka ba?",
        "yung couple shirt 😝",

        
        
    ];

    backgroundMusic.volume = 1;

    function typeWriter(text, index, callback) {
        if (index < text.length) {
            typedText.innerHTML += text.charAt(index);
            index++;
            setTimeout(function () {
                typeWriter(text, index, callback);
            }, 60);
        } else {
            if (callback) {
                setTimeout(callback, 1500);
            }
        }
    }

    function clearText() {
        typedText.innerHTML = '';
    }

    function showImageAndMessages(imageContainer, nextCallback) {
        typedText.style.display = 'none';
        imageContainer.style.display = 'block';
        setTimeout(function () {
            imageContainer.style.display = 'none';
            typedText.style.display = 'block';
            if (nextCallback) {
                nextCallback();
            }
        }, 3000);
    }

    setTimeout(function () {
        backgroundMusic.play();
        typeWriter(messages[0], 0, function () {
            clearText();
            setTimeout(function () {
                typeWriter(messages[1], 0, function () {
                    clearText();
                    setTimeout(function () {
                        typeWriter(messages[2], 0, function () {
                            clearText();
                            setTimeout(function () {
                                typeWriter(messages[3], 0, function () {
                                    clearText();
                                    setTimeout(function () {
                                        typeWriter(messages[4], 0, function () {
                                            clearText();
                                            showImageAndMessages(imageContainer, function () {
                                                showImageAndMessages(imageContainer1, function () {
                                                    showImageAndMessages(imageContainer3, function () {
                                                        typeWriter(messages[5], 0, function () {
                                                            clearText();
                                                            setTimeout(function () {
                                                                typeWriter(messages[6], 0, function () {
                                                                    clearText();
                                                                    setTimeout(function () {
                                                                        typeWriter(messages[7], 0, function () {
                                                                            clearText();
                                                                            setTimeout(function () {
                                                                                typeWriter(messages[8], 0, function () {
                                                                                    clearText();
                                                                                    setTimeout(function () {
                                                                                        typeWriter(messages[9], 0, function () {
                                                                                            clearText();
                                                                                            setTimeout(function () {
                                                                                                typeWriter(messages[10], 0, function () {
                                                                                                    clearText();
                                                                                                    setTimeout(function () {
                                                                                                        typeWriter(messages[11], 0, function () {
                                                                                                            clearText();
                                                                                                            showImageAndMessages(imageContainer4, function () {
                                                                                                                setTimeout(function () {
                                                                                                                    typeWriter(messages[12], 0, function () {
                                                                                                                        clearText();
                                                                                                                        setTimeout(function () {
                                                                                                                            typeWriter(messages[13], 0, function () {
                                                                                                                                clearText();
                                                                                                                                showImageAndMessages(imageContainer5, function () {
                                                                                                                                    setTimeout(function () {
                                                                                                                                        typeWriter(messages[14], 0, function () {
                                                                                                                                            clearText();
                                                                                                                                            setTimeout(function () {
                                                                                                                                                typeWriter(messages[15], 0, function () {
                                                                                                                                                    clearText();
                                                                                                                                                    setTimeout(function () {
                                                                                                                                                        typeWriter(messages[16], 0, function () {
                                                                                                                                                            // Continue the pattern for additional messages
                                                                                                                                                        });
                                                                                                                                                    }, 800);
                                                                                                                                                });
                                                                                                                                            }, 300);
                                                                                                                                        });
                                                                                                                                    }, 300);
                                                                                                                                });
                                                                                                                            });
                                                                                                                        }, 1300);
                                                                                                                    });
                                                                                                                }, 1300);
                                                                                                            });
                                                                                                        });
                                                                                                    }, 1300);
                                                                                                });
                                                                                            }, 1300);
                                                                                        });
                                                                                    }, 1300);
                                                                                });
                                                                            }, 1300);
                                                                        });
                                                                    }, 1300);
                                                                });
                                                            }, 1300);
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    }, 1300);
                                });
                            }, 1300);
                        });
                    }, 1300);
                });
            }, 1300);
        });
    }, 3000);       
});