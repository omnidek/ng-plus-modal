import { Modal } from '../modal/modal';

export class Confirm {

    title = 'Confirmation';
    message = 'Are you sure?';
    style: 'primary' | 'danger' | 'warning' | 'info' | 'success' | 'default' = 'danger';
    confirmButton = 'Yes';
    cancelButton = 'Cancel';
    icon: string;
    imgUrl: string;

    protected presented = false;

    public static info(title: string, message: string, confirmButtonText?: string, onConfirm?: (confirm?: Confirm) => void,
    onCancellation?: (cancel?: Confirm) => void): Confirm {
        return Confirm.prepare(title, message, confirmButtonText, onConfirm, onCancellation).setStyle('info');
    }

    public static error(title: string, message: string, confirmButtonText?: string, onConfirm?: (confirm?: Confirm) => void,
     onCancellation?: (cancel?: Confirm) => void): Confirm {
        return Confirm.prepare(title, message, confirmButtonText, onConfirm, onCancellation).setStyle('danger');
    }

    public static danger(title: string, message: string, confirmButtonText?: string, onConfirm?: (confirm?: Confirm) => void,
    onCancellation?: (cancel?: Confirm) => void): Confirm {
        return Confirm.prepare(title, message, confirmButtonText, onConfirm, onCancellation).setStyle('danger');
    }

    public static delete(message: string, onConfirm?: (confirm?: Confirm) => void, onCancellation?: (cancel?: Confirm) => void): Confirm {
        return Confirm.prepare('Delete confirmation', message, 'Delete', onConfirm, onCancellation).setStyle('danger');
    }

    public static success(title: string, message: string, confirmButtonText?: string, onConfirm?: (confirm?: Confirm) => void, onCancellation?: (cancel?: Confirm) => void): Confirm {
        return Confirm.prepare(title, message, confirmButtonText, onConfirm, onCancellation).setStyle('success');
    }

    public static warning(title: string, message: string, confirmButtonText?: string, onConfirm?: (confirm?: Confirm) => void, onCancellation?: (cancel?: Confirm) => void): Confirm {
        return Confirm.prepare(title, message, confirmButtonText, onConfirm, onCancellation).setStyle('warning');
    }

    protected static prepare(title: string, message: string, confirmButtonText?: string, onConfirm?: (confirm?: Confirm)
    => void, onCancellation?: (cancel?: Confirm) => void): Confirm {
        const confirm = new Confirm();
        confirm.title = title;
        confirm.message = message;
        confirm.confirmButton = confirmButtonText || 'Okay';
        confirm.onConfirmation = onConfirm || confirm.onConfirmation;
        if(onCancellation){
            confirm.onCancellation = onCancellation;
        }
        return confirm.present();
    }

    closeWindow: () => void = () => {};
    onConfirmation: () => void = () => {};
    onCancellation: ()  => void = () => {};

    public setStyle(style: 'primary' | 'danger' | 'warning' | 'info' | 'success' | 'default'): Confirm {
        this.style = style;
        return this;
    }

    public setIcon(icon: string): Confirm {
        this.icon = icon;
        return this;
    }

    public setImage(imgUrl: string): Confirm {
        this.imgUrl = imgUrl;
        return this;
    }


    public present() {
        if (this.presented) {
            return this;
        }
        this.presented = true;
        const modal = new Modal();
        modal.showTitle = false;
        modal.selector = 'ng-plus-confirm';
        modal.styles = 'modal-alert';
        modal.animation = 'zoomIn border-none';
        modal.width = 400;
        modal.data = { model: this };
        modal.onEscape = 'wait';
        modal.present();

        this.closeWindow = () => {
            modal.exitImmediately();
        };
        return this;
    }
}
