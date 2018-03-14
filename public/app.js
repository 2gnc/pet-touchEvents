window.addEventListener( 'DOMContentLoaded', ( e ) => {
	const invader = document.querySelector( '.invader' );
	const invader2 = document.querySelector( '.invader' );
	const invaderEls = document.querySelectorAll( '.invader_el' );
	const manager = new Hammer.Manager( invader );
	const DoubleTap = new Hammer.Tap({
		event: 'doubletap',
		taps: 2
	});

	let invHammer = new Hammer( invader2 );

	const guns = document.querySelectorAll( '.fa-star' );

	let isGunman = false;

	manager.add( DoubleTap );
	

	manager.on('doubletap', (e) => {
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

	invHammer.on( 'swiperight', (e) => {
		console.log( 'swipe' );
		invaderEls[0].innerHTML = 'ttt';
	} )

})