# PDF-GENARATOR
This repository contains a React-based  application form that allows users to fill in their  application details and generate a PDF version of the form. The application also includes a PDF viewer page to preview the generated PDF document
## Features

- **Job Application Form:** A fully responsive and styled form where users can enter their details for job applications.
- **PDF Generation:** Uses `html2canvas` to capture the form and `pdf-lib` to create a downloadable PDF.
- **PDF Viewer:** After generating the PDF, users can preview it directly in the browser or download it.

## Technologies Used

- **React:** For building the user interface.
- **html2canvas:** To capture the HTML form as an image.
- **pdf-lib:** To create a PDF document from the captured image.
- **React Router:** For navigating between the form and PDF viewer.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/PiyumikaSewmini/PDF-GENERATOR.git
    ```
2. Navigate to the project directory:
    ```bash
    cd pdf-generator-app
    ```
3. Install dependencies:
    ```bash
    npm install
    npm install html2canvas pdf-lib
    ```
4. Start the development server:
    ```bash
    npm start
    ```

The application should now be running at `http://localhost:3000`.

## How It Works

- **Form Submission:** Users can fill out the job application form. When they click on "Generate PDF", the form is captured as a canvas using `html2canvas`.
- **PDF Generation:** The captured canvas is converted to an image and embedded into a PDF using `pdf-lib`. The PDF is then displayed in a PDF viewer using an `<object>` tag.
- **PDF Viewer:** After generating the PDF, the application navigates to a PDF viewer page where the user can preview or download the generated PDF.