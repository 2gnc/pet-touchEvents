window.addEventListener( 'DOMContentLoaded', ( e ) => {
	const invader = document.querySelector( '.invader' );
	const manager = new Hammer.Manager( invader );
	const DoubleTap = new Hammer.Tap({
		event: 'doubletap',
		taps: 2
	});
	manager.add(DoubleTap);

	manager.on('doubletap', (e) => {
		});

});