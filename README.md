# AdminWebsite

#### Notes:
New: Service (or Appointment)/Product

Service:
  - number (sGUID)
  - type (date n time with duration, status, charge, contact, address, assignee)
  - notes [1-*]
  - reminders (email/sms) [1-*]
  - ad-hoc contact (email/sms) [1-*]
  - Payment: Billed, payment status, payment notes
Service Status (customizable): e.g., New, Ready, Scheduled, Completed, Cancelled, No show
ServiceType:
  - name
  - default status
  - appointment date n time with optional default duration (hidden, optional, required)
  - charge (fixed/hourly, per hour charge)
  - contact (hidden, optional, required)
  - address (hidden, optional, required)
  - assigned to (hidden, optional, required)

Product: name, type, fixed charge, deliverable
Product type:
Contact: Given name, last name, email, number, note
Staff: Given name, last name, email, number, note
Find: Product/Service/Contact/Staff

Billing: 

Reminders: Email/SMS/Both - days before

Setting: Labels (Service/Product/Contact/User), app name, logo, email/sms config

#####################################
SCREENS:

Dashboard:
- app name and logo
- menu: new (product / services), 

Settings:


Logout


#####################################
