import { ChangeDetectionStrategy, Component } from '@angular/core';
import { oneProduct } from '../../../../shared/mocks/3-directives/product-information';

@Component({
	selector: 'ngx-shop-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	public title = 'Компонент информации о товаре';

	public product = oneProduct;

	public terminalMessage = null;

	public addToCart(value: string): void {
		this.terminalMessage = value;
	}
}
