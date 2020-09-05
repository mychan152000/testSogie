const intro1 = document.getElementById("intro_one")
intro1.innerHTML =
    `<div style="height: 100%; width: 100%; display: flex;">
    <div class="intro-text">
        <span class="move-fast"><span class="intro-text-line-1">V</span><span class="intro-text-line-1 move-fast-disappear">IETNAM</span></span>
        <span class="move-fast"><span class="intro-text-line-2">Y</span><span class="intro-text-line-2 move-normal-disappear">OUTH</span></span>
        <span class="move-fast"><span class="intro-text-line-3">A</span><span class="intro-text-line-3 move-slow-disappear">LLIANCE</span></span>
    </div>
    
    <div class="intro-image-outer">
        <div class="intro-image-container intro-image-wow">
            <img src="../images/Wow.png" class="intro-image"/>
        </div>
        <div class="intro-image-container intro-image-happy">
            <img src="../images/Happy.png" class="intro-image"/>
        </div>
    </div>

    <div class="intro-text-line-4-container move-to-center">
        <div>
            <p class="intro-text-line-4">SOGIESC TEST</p>
        </div>
        
        <!--Playing button-->
        <button id="playBtn" class="content-box__btn content-box__btn--hover">
            bắt đầu
        </button>

        <div id="content_one" class="container-fluid__items__content">
          <div class="content-box">
            <div class="content-box__playedBtn">
              <button id="playBtn" class="content-box__btn content-box__btn--hover">
                bắt đầu
              </button>
            </div>
          </div>
        </div>
    </div>

    <style>
        .intro-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -120%);
            text-align: left;
            font-size: 5rem;
            font-weight: 500;
            font-family: norwester !important;
        }
        .intro-text-line-1 {
            font-family: norwester !important;
            color: #44B6F2 !important;
        }
        .intro-text-line-2 {
            font-family: norwester !important;
            color:  #FF90CE !important;
        }
        .intro-text-line-3 {
            font-family: norwester !important;
            color: #C886B4 !important;
        }
        .intro-text-line-4-container {
            position: absolute;
            left: 50%;
            transform: translate(-50%, -120%);
        }
        .intro-text-line-4 {
            font-weight: 700;
            color: #3D516E;
            text-align: center;
            display: inline-block;
            font-family: Cambria;
            font-size: 6rem;
        }
        .intro-image-outer {
            position: relative;
            width: 80%;
            transform: translateY(100vh);
            margin: auto;
        }
        .intro-image {
            width: 100%;
            margin-left: 2em;
        }
        .intro-image-wow {
            z-index: 100;
        }
        .intro-image-happy {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 999;
        }
        @media (max-width: 48em) {
            .intro-text {
                font-size : 5rem;
            }
            .intro-text-line-4 {
                font-size: 6rem;
            }
            .intro-image {
                margin-left: 0;
            }
        }
        @media (max-width: 36em) {
            .intro-text {
                font-size: 4rem;
            }
            .intro-text-line-4 {
                font-size: 4rem;
            }
            .intro-image {
                margin-left: 0;
            }
        }

        @media (max-width: 25em) {
            .intro-text {
                font-size : 3rem;
            }
            .intro-text-line-4 {
                font-size: 3rem;
            }
            .intro-image {
                margin-left: 0;
            }
        }
    </style>
</div>`