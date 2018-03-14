window.addEventListener( 'DOMContentLoaded', ( e ) => {
	const invader = document.querySelector( '.invader' );
	const invaderEls = document.querySelectorAll( '.invader_el' );
	const manager = new Hammer.Manager( invader );
	const DoubleTap = new Hammer.Tap({
		event: 'doubletap',
		taps: 2
	});
	const guns = document.querySelectorAll( '.fa-star' );

    const Swipe = new Hammer.Swipe();

	let isGunman = false;
    let isRunning = false;

	manager.add(DoubleTap);
    manager.add(Swipe);

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

})