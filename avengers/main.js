window.onload = function (){
    window.addEventListener("scroll", (e)=>{
        console.log(window.scrollY)
    })


    lax.init();

    //monitoriamos el valor de scrollY
    lax.addDriver('scrollY', function(){
        return window.scrollY;
    })


    /*
    add Elements: 
    1er parametro: selector css
    2do parametro: opciones de animacion
    */
    lax.addElements('.logo',{
        scrollY: {
            //propiedas css que se pueden animar.
            scale: [
                //posicion de scroll para ejecutar la animacion 
                [0, 100],
                //incremento de scroll
                [1, 3]
            ],
            opacity: [
                [0, 70],
                [1, 0]
            ],
            translateY: [
                [0, 80],
                [0, 200]
            ]
        }
    });
    lax.addElements('.ultron',{
        scrollY: {
            opacity: [
                [0, 80],
                [0, 1]
            ],
            translateY: [
                [0, 400],
                [0, 80]
            ]
        }
    });
    lax.addElements('.loki',{
        scrollY: {
            opacity: [
                [40, 120],
                [0, 1]
            ],
            translateY: [
                [0, 400],
                [0, -80]
            ]
        }
    });
    lax.addElements('.thanos',{
        scrollY: {
            opacity: [
                [80, 160],
                [0, 1]
            ],
            translateY: [
                [0, 400],
                [0, 80]
            ]
        }
    });

    lax.addElements(".scroll-tip",{
        scrollY: {
            opacity: [
                [0, 500],
                [1, 0]
            ],
            translateY: [
                [0, 800],
                [-200, 0]
            ],
            "letter-spacing": [
                [0, 600],
                [0, 150], {
                    cssUnit : "px"
                }
            ]
        }
    }); 
    lax.addElements(".ironman-title",{
        scrollY: {
            filter: [
                [600, 700, 800, 900, 1000, 1200],
                [0, 50, 0, 50, 0, 50, 0],
                {
                    cssFn: function (value){
                        return `drop-shadow(0 0 ${value}px yellow)`
                    }
                }
            ],
            translateY: [
                [1200, 1700],
                [200, "elCenterY-150"]
            ]
        }
    });
    lax.addElements(".ironman-01",{
        scrollY: {
            translateY: [
                [1200, 2000],
                [800, -1500]
            ]
        }
    });
    lax.addElements(".ironman-02",{
        scrollY: {
            scale:[
                [2000, 2500],
                [0, 2]
            ],
            translateX: [
                [2000, 2200, 3000],
                [0, 1000, 0]
            ],
            translateY: [
                [2000, 2200, 3000],
                [-500, 0, -200]
            ]     
        }
    });
    lax.addElements(".shield",{
        scrollY: {
            translateX: [
                [3200, 3400, 3600, 3800],
                [-800, 'screenWidth-200', 0, 'screenWidth+200' ]
            ],
            translateY: [
                [3200, 3400, 3600, 3800],
                [800, 1200, 1600,1600]
            ]     
        }
    });

    lax.addElements(".capitan-title",{
        scrollY: {
            filter: [
                [3000, 3100, 3200, 3300, 3400, 3500, 3600],
                [0, 50, 0, 50, 0, 50, 0],
                {
                    cssFn: function (value){
                        return `drop-shadow(0 0 ${value}px blue)`
                    }
                }
            ],
            translateY: [
                [3000, 3500],
                [400, 900]
            ]
        }
    });

    lax.addElements(".capi",{
        scrollY: {
            translateX: [
                [3900, 4400],
                [400, -800]
            ],
            translateY: [
                [3900, 4400],
                [600, 600]
            ],
            sclae: [
                [3900, 4400],
                [1, 0.5]
            ],
            opacity: [
                [3900, 4000],
                [0, 1]
            ]
        }
        
    });

    lax.addElements(".shield02", {
        scrollY: {
          translateX: [
            [3900, 4400],
            [0, 2500],
          ],
          translateY: [
            [3000, 4600],
            [0, 400],
          ],
          scale: [
            [3900, 4300],
            [1, 10],
          ],
          opacity: [
            [3900, 4000],
            [0, 1],
          ],
        },
      });

    
    lax.addElements(".rayo", {
        scrollY: {
          scaleX: [
            [4500, 4600],
            [0, 1],
          ],
          translateY: [
            [4700, 5000, 5150],
            [-200, -200, 0],
          ],
          opacity: [
            [4500, 4800, 4850],
            [0, 1, 0],
          ],
        },
      });

    lax.addElements(".thor-title-01 img",{
        scrollY: {
            scale: [
                [4900, 5000],
                [3, 1]
            ],
            opacity: [
                [4900, 5000],
                [0, 1]
            ]
        }
    });
    
    lax.addElements(".thor-title-02 img",{
        scrollY: {
            scale: [
                [4920, 5000],
                [3, 1]
            ],
            opacity: [
                [4900, 5000],
                [0, 1]
            ]
        }
    });
    
    lax.addElements(".thor-title-03 img",{
        scrollY: {
            scale: [
                [4940, 5000],
                [3, 1]
            ],
            opacity: [
                [4900, 5000],
                [0, 1]
            ]
        }
    });
    
    lax.addElements(".thor-title-04 img",{
        scrollY: {
            scale: [
                [4960, 5000],
                [3, 1]
            ],
            opacity: [
                [4900, 5000],
                [0, 1]
            ]
        }
    });

    lax.addElements(".thor",{
        scrollY: {
            translateX: [
                [4600, 5100],
                [-800, "screenWidth + 1000"]
            ],
            translateY: [
                [4600, 5100],
                [0, -3000]
            ], 
            scale: [
                [4600,4900, 5100],
                [0,2, 4]
            ],
        }
    });
    lax.addElements(".thor-2",{
        scrollY: {
            opacity: [
              [5400, 5800],
              [0, 1],
            ],
            filter: [
              [5400, 5800],
              [100, 0],
              {
                cssFn: (value) => {
                  return `blur(${value}px)`;
                },
              },
            ],
            translateY: [
              [4800, 5800],
              [-5000, 100],
            ],
            
          },
        });

        lax.addElements(".avengers-logo img",{
            scrollY: {
                opacity: [
                  [5900, 6600],
                  [0, 2],
                ],
                scale: [
                    [5900, 6600],
                    [0, 1]
                ]
              },
            });
        
    
}