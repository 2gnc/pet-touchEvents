window.addEventListener( 'DOMContentLoaded', ( e ) => {
	const invader = document.querySelector( '.invader' );
    const eye = document.querySelector( '.eye__inner' );
    const poo = document.querySelector( '.poo' );
	const invaderEls = document.querySelectorAll( '.invader_el' );
	const manager = new Hammer.Manager( invader );
	const DoubleTap = new Hammer.Tap({
		event: 'doubletap',
		taps: 2
	});
	const guns = document.querySelectorAll( '.fa-star' );

    const Swipe = new Hammer.Swipe();
    const Press = new Hammer.Press({
        time: 300
    })
    const Pinch = new Hammer.Pinch();

	let isGunman = false;
    let isRunning = false;
    let isTerminator = false;
    let isPoo = false

	manager.add(DoubleTap);
    manager.add(Swipe);
    manager.add(Press);
    manager.add(Pinch);

	manager.on( 'doubletap', (e) => {
        if (!isGunman) {
            isGunman = true;
            guns.forEach( (item)=> {
                item.classList.toggle( 'fa-star_animated' )
            });
            setTimeout(()=>{
                guns.forEach( (item)=> {
                    item.classList.toggle( 'fa-star_animated' )
                });
                isGunman = false;
            }, 2200)
        }
    })

    manager.on( 'swipeleft', (e) => {
        if( !isRunning ) {
            isRunning = true;
            invader.classList.toggle( 'invader_runningL' );
            setTimeout( () => {
                invader.classList.toggle( 'invader_runningL' );
                isRunning = false;
            }, 2000 );
        }
    } )

    manager.on( 'swiperight', (e) => {
        if( !isRunning ) {
            isRunning = true;
            invader.classList.toggle( 'invader_runningR' );
            setTimeout( () => {
                invader.classList.toggle( 'invader_runningR' );
                isRunning = false;
            }, 2000 );
        }
    } )

    manager.on( 'press', ( e ) => {
        if ( !isTerminator ) {
            isTerminator = true;
            invader.classList.toggle( 'invader_terminator' );
            eye.classList.toggle( 'eye_terminator' );
            setTimeout( () => {
                invader.classList.toggle( 'invader_terminator' );
                eye.classList.toggle( 'eye_terminator' );
                isTerminator = false;
            }, 2100 )
        }
    } )

    manager.on( 'pinch', (e) => {
        if ( !isPoo ) {
            isPoo = true;
            invader.classList.toggle( 'invader_poo' );
            setTimeout( () => {
                poo.style = "visibility: visible"
            }, 2000 )
            setTimeout( () => {
                isPoo = false;
                invader.classList.toggle( 'invader_poo' );
                poo.style = "visibility: hidden"
            }, 5000 );
        }
    } )

})