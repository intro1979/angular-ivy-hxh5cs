import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouteService } from '../../shared/route.service';

@Component({
  selector: 'app-add-invoices',
  templateUrl: './add-invoices.component.html',
  styleUrls: ['./add-invoices.component.css']
})
export class AddInvoicesComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('resetInvoiceForm') myNgForm;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  selectedPaymentTerm: string;
  invoiceForm: FormGroup;
  PaymentTerm: any[] = [
    'Cash',
    'EFT',
    'Account'
  ];

  constructor(
    public fb: FormBuilder, 
    private routeApi: RouteService) {}

  ngOnInit() {
  }

  submitInvoiceForm() {
    this.invoiceForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      dispatch_date: ['', Validators.required],
      invoice_date: ['', Validators.required],
      inv: ['', Validators.required],
      cartons: ['', Validators.required],
      amount: ['', Validators.required],
      payment_term: ['', Validators.required]
    })
  }

    /* Get errors */
    public handleError = (controlName: string, errorName: string) => {
      return this.invoiceForm.controls[controlName].hasError(errorName);
    };

    /* Date */
    formatDate(e) {
      var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
      this.invoiceForm.get('disptach_date').setValue(convertDate, {
        onlyself: true
      });
      this.invoiceForm.get('invoice_date').setValue(convertDate, {
        onlyself: true
      });
    }
      /* Reset form */
  resetForm() {
    this.invoiceForm.reset();
    Object.keys(this.invoiceForm.controls).forEach(key => {
      this.invoiceForm.controls[key].setErrors(null);
    });
  }
  /* Submit invoice */
  submitInvoice() {
    if (this.invoiceForm.valid) {
      this.routeApi.AddInvoice(this.invoiceForm.value);
      this.resetForm();
    }
  }
}