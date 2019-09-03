import { Component, OnInit } from "@angular/core";
import { IProduct } from "./products";
import { ProductService } from "./products.service";

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 3;
  showImage: boolean = false;
  // listFilter: string = "cart";

  // gettng user inputs using getter and setter
  _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  filteredProducts: IProduct[];

  products: IProduct[];

  constructor(private productService: ProductService) {}

  toggleImage(): void {
    console.log("toggling image...");
    this.showImage = !this.showImage;
  }

  // displaying the star Rating with the title when stars are clicked
  onRatingClicked(message: string) {
    this.pageTitle = "Product list:" + message;
  }

  // filtering produts
  performFilter(filterBy: string): IProduct[] {
    // converting the input to lowercase for case insensitivity
    filterBy = filterBy.toLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  ngOnInit(): void {
    console.log("in onInit");
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    this.listFilter = "";
  }
}
