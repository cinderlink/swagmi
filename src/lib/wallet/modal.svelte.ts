interface ModalStore {
	isOpen: boolean;
}

class ModalState {
	state = $state<ModalStore>({
		isOpen: false
	});

	get isOpen() {
		return this.state.isOpen;
	}

	show() {
		this.state.isOpen = true;
	}

	hide() {
		this.state.isOpen = false;
	}

	toggle() {
		this.state.isOpen = !this.state.isOpen;
	}
}

export const modal = new ModalState();

// Legacy functions for backwards compatibility
export function showModal() {
	modal.show();
}

export function hideModal() {
	modal.hide();
}
