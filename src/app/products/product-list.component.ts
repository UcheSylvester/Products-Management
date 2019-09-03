import { Component, OnInit } from "@angular/core";
import { IProduct } from "./products";
// import { filter } from "minimatch";

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

  products: IProduct[] = [
    {
      productId: 1,
      productName: "Leaf Rake",
      productCode: "GDN-0011",
      releaseDate: "March 19, 2019",
      description: "Leaf rake with 48-inch wooden handle.",
      price: 19.95,
      starRating: 3.2,
      imageUrl: "assets/images/leaf_rake.png"
    },
    {
      productId: 2,
      productName: "Garden Cart",
      productCode: "GDN-0023",
      releaseDate: "March 18, 2019",
      description: "15 gallon capacity rolling garden cart",
      price: 32.99,
      starRating: 4.2,
      imageUrl: "assets/images/garden_cart.png"
    },
    {
      productId: 5,
      productName: "Hammer",
      productCode: "TBX-0048",
      releaseDate: "May 21, 2019",
      description: "Curved claw steel hammer",
      price: 8.9,
      starRating: 4.8,
      imageUrl: "assets/images/hammer.png"
    },
    {
      productId: 8,
      productName: "Saw",
      productCode: "TBX-0022",
      releaseDate: "May 15, 2019",
      description: "15-inch steel blade hand saw",
      price: 11.55,
      starRating: 3.7,
      imageUrl: "assets/images/saw.png"
    }
  ];

  toggleImage(): void {
    console.log("toggling image...");
    this.showImage = !this.showImage;
    // console.log(this.showImage);

    // this.buttonText = this.showImage ? "Show Image" : "Hide Image";
  }

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = "";
  }

  // displaying the star Rating with the title when stars are clicked
  onRatingClicked(message: string) {
    this.pageTitle = 'Product List' + message;
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
  }
}
