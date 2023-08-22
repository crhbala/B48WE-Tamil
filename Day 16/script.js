  const countdownContainer = document.getElementById('countdown');
        setTimeout(function () {
            countdownContainer.innerText = "10";
            setTimeout(function () {
                 countdownContainer.innerText = "9";
                setTimeout(function () {
                     countdownContainer.innerText = "8";
                    setTimeout(function () {
                         countdownContainer.innerText = "7";
                        setTimeout(function () {
                             countdownContainer.innerText = "6";
                            setTimeout(function () {
                                countdownContainer.innerText = "5";
                                setTimeout(function () {
                                     countdownContainer.innerText = "4";
                                    setTimeout(function () {
                                        countdownContainer.innerText = "3";
                                        setTimeout(function () {
                                             countdownContainer.innerText = "2";
                                            setTimeout(function () {
                                                 countdownContainer.innerText = "1";
                                                setTimeout(function () {
                                                    document.body.classList.add("blue-bg");
                                                     countdownContainer.innerText = "Happy Independence Day!";
                                                }, 1000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);