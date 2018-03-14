window.addEventListener( 'DOMContentLoaded', ( e ) => {
	const invader = document.querySelector( '.invader' );
	const invaderEls = document.querySelectorAll( '.invader_el' );
	const manager = new Hammer.Manager( invader );
	const DoubleTap = new Hammer.Tap({
		event: 'doubletap',
		taps: 2
	});
	const guns = document.querySelectorAll( '.fa-star' );

    let hammer = new Hammer( invader );

	let isGunman = false;

	manager.add(DoubleTap);

	console.log( invaderEls  );

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

    hammer.on( 'panleft', (e) => {
        invaderEls[0].innerHTML = 'pa';
        console.log('pa');
    } )

    hammer.on( 'swipeleft', (e) => {
        invaderEls[1].innerHTML = 'vs';
        console.log('sv');
    } )

})