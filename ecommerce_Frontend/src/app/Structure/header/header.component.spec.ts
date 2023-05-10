import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the HeaderComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display the site logo', () => {
    const logo = fixture.nativeElement.querySelector('img');
    expect(logo.src).toContain('assets/img/logo.jpg');
  });

  it('should display navigation links for "Hommes", "Femmes" and "Enfants"', () => {
    const navLinks = fixture.nativeElement.querySelectorAll('a[routerLink]');
    expect(navLinks.length).toBe(3);
    expect(navLinks[0].textContent).toContain('Hommes');
    expect(navLinks[1].textContent).toContain('Femmes');
    expect(navLinks[2].textContent).toContain('Enfants');
  });

  it('should display a search input field', () => {
    const searchInput = fixture.nativeElement.querySelector('input[type="search"]');
    expect(searchInput).toBeTruthy();
  });

  it('should display icons for "favorite" and "shopping_basket"', () => {
    const icons = fixture.nativeElement.querySelectorAll('mat-icon[routerLink]');
    expect(icons.length).toBe(2);
    expect(icons[0].textContent).toContain('favorite');
    expect(icons[1].textContent).toContain('shopping_basket');
  });
});
