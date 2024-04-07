//! Question 1 : Display countdown from 10 to 1 on the screen and display Happy Independence Day on the screen.

setTimeout(() => {
    document.getElementById("callback").innerText = "10";
    setTimeout(() => {
      document.getElementById("callback").innerText = "9";
      setTimeout(() => {
        document.getElementById("callback").innerText = "8";
        setTimeout(() => {
          document.getElementById("callback").innerText = "7";
          setTimeout(() => {
            document.getElementById("callback").innerText = "6";
            setTimeout(() => {
              document.getElementById("callback").innerText = "5";
              setTimeout(() => {
                document.getElementById("callback").innerText = "4";
                setTimeout(() => {
                  document.getElementById("callback").innerText = "3";
                  setTimeout(() => {
                    document.getElementById("callback").innerText = "2";
                    setTimeout(() => {
                      document.getElementById("callback").innerText = "1";
                      setTimeout(() => {
                        document.getElementById("callback").innerText =
                          "Happy Independence Day";
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
