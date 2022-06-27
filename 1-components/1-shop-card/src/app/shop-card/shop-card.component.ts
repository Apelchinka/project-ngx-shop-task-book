import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartProduct } from '../../../../../shared/mocks/1-components/cart-product';

@Component({
	selector: 'ngx-shop-card',
	templateUrl: './shop-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopCardComponent {
	// eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
	@Input()
	public product: ICartProduct = {} as ICartProduct;

	@Output()
	public increment = new EventEmitter();

	@Output()
	public decrement = new EventEmitter();

	public incrementProductInCart(): void {
		this.increment.emit();
	}

	public decrementProductInCart(): void {
		this.decrement.emit();
	}
}
