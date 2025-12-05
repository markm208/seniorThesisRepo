# Senior Thesis Repo: [Website for Mom]

# Spec

Below is my project specification.  

## Software Requirements Specification for the Website for Mom

## Introduction

### Purpose
The purpose of this document is to outline the functional and non-functional requirements of Mom's Website. The website is designed to allow customers to browse products made by my Mom online.  This specification serves as a contract between the users and myself to ensure that the website meets the needs of its users while adhering to university policies and technical constraints.

The key goals of the website are:
- To allow users to browse products online

### Scope
This website is intended to support the browsing of all users. The system will handle:
- Access to products database.
- Product search.
- Access to customer information.
- Management of product cart, including the ability to add, drop, or modify products in the cart.
- Cart viewing.

The scope of the website also includes administrative tools for the owner to:
- Create and modify product offerings.
- Manage prices.
- Track customer interest.

### Definitions, Acronyms, and Abbreviations
- ****: .


## Overview
The website is designed to allow potential customers to view product information online. It serves as the primary interface for customers to manage their online shopping cart.

### System Features:
1. **Product Search**: Allows customers to browse available products by category, name, etc.
2. **Product Management**: The owner will be able to add, drop, or modify product information. 
3. **Product Information**: Provides  access to product information.

The website is designed with accessability in mind and is built using modern web technologies to ensure ease of use, reliability, and performance.

The following sections detail the specific use cases that the website will support, describing how customers and owner will interact with the website during typical operations.

## Use Cases

### Use Case 1.1: Secure Login
- **Actors**: Student or registrar
- **Overview**: Actor uses password to verify their identity.

**Typical Course of Events**:
1. Page prompts for username and password.
2. User enters their username and password and hits enter/login.
3. System verifies that the username and password are correct.

**Alternative Courses**:
- **Step 3**: User and/or password are not correct.
  1. Displays error.
  2. Go back to step 1.

### Use Case 1.2: Find a Course
- **Actors**: Student
- **Overview**: Student finds a desired class.

**Typical Course of Events**:
1. Run Use Case 1.1, *Secure Login*.
2. Displays list of current and upcoming semesters.
3. Student selects a semester.
4. Displays departments actively offering courses in that semester.
5. Student selects a department.
6. Displays courses of that department from that semester that are currently offered.
7. Student selects a course.
8. Displays course details.

**Alternative Courses**:
- Any step: Student can start a new search at any time
  1. Student clicks "start new search."
  2. Go back to step 2.

### Use Case 1.3: Register for a Course
- **Actors**: Student
- **Overview**: Student registers for a course.

**Typical Course of Events**:
1. Run Use Case 1.2, *Find a Course*.
2. Student clicks on "register for course" button.
3. Verify that student can take the course.
4. Display "You have successfully registered for 'insert course name here'."

**Alternative Courses**:
- **Step 4**: Student can't take course
  1. Displays "You cannot take this course, please contact the registrar for further information."

### Use Case 1.4: Check Grades
- **Actors**: Student
- **Overview**: Student checks grades.

**Typical Course of Events**:
1. Run Use Case 1.1, *Secure Login*.
2. Display previous semesters in which the student took course(s).
3. Student selects semester.
4. Displays courses and grades.

### Use Case 1.5: Registrar Creates Sections
- **Actors**: Registrar
- **Overview**: Registrar creates section.

**Typical Course of Events**:
1. Run Use Case 1.1, *Secure Login*.
2. Registrar selects "Create Section."
3. Display "Create Section" form.
4. Registrar submits form.
5. System verifies valid entry (no overlapping schedules/times).
6. Displays section details and successfully added.

**Alternative Courses**:
- **Step 6**: Entry invalid
  1. Display error.
  2. Go back to step 3.

### Use Case 1.6: Registrar Modifies Section
- **Actors**: Registrar
- **Overview**: Registrar modifies existing sections.

**Typical Course of Events**:
1. Run Use Case 1.1, *Secure Login*.
2. Registrar selects "Modify section."
3. Displays all sections (with order options).
4. Choose section.
5. Display "Edit Form" with filled-in data.
6. Submit/verify data.
7. Display "Section successfully edited."

**Alternative Courses**:
- **Step 7**: Invalid Data
  1. Display Error.
  2. Go back to step 5.
