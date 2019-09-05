import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { IProduct } from "./products";

@Component({
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";
  product: IProduct;
  constructor(private route: ActivatedRoute, private router: Router) {}

  onBack(): void {
    this.router.navigate(["./products"]);
  }

  ngOnInit() {
    console.log("product-details onInit");
    let id = +this.route.snapshot.paramMap.get("id");
    this.pageTitle += ` ${id}`;
    this.product = {
      productId: 10,
      productName: "Video Game Controller",
      productCode: "GMG-0042",
      releaseDate: "October 15, 2018",
      description: "Standard two-button video game controller",
      price: 35.95,
      starRating: 4.6,
      imageUrl: "assets/images/xbox-controller.png"
    };
  }
}
