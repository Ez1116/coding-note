# Coding Note

This repository contains interactive web-based tools, visualizations for data analysis and statistical concepts, educational survey automation scripts, and research tools, primarily designed in Traditional Chinese.

- Page url: https://ez1116.github.io/coding-note/

## Files Overview

### 📊 Basic statistics.html
An interactive statistics learning tool featuring:
- Visual explanations of basic statistical concepts
- Interactive demonstrations of mean, median, mode calculations
- Gradient background design with responsive layout
- Educational content in Traditional Chinese

### 🏷️ Ezivo.html & Ezivo-CYC.html & Ezivo-fig-CYC.html 
Advanced qualitative data labeling systems with:
- **Ezivo.html**: Text annotation and tagging functionality (Mandarin version)
  - PDF export capabilities using jsPDF and html2canvas
  - Professional interface for qualitative research
  - Data categorization and analysis tools
  - Both Mandarin Chinese and English versions
- **Ezivo-CYC.html**: Enhanced qualitative research tool with:
  - Sophisticated text coding and annotation system
  - Customizable labeling categories with color coding
  - Interactive text selection and scoring (1-10 scale)
  - Comment functions
  - Comprehensive statistical analysis and reporting
  - PDF export with labeled text and analytics
  - Data persistence with local storage
  - Designed for academic research and content analysis
- **Ezivo-fig-CYC.html**: Adapted version from Ezivo-CYC
  - Sophisticated image coding and annotation system

### 📈 Visualizing multiple relationships.html
A three-variable relationship visualization tool including:
- Interactive charts using Chart.js library
- Multi-dimensional data visualization capabilities
- Responsive design with modern UI elements
- Statistical relationship analysis tools

### 🎯 Automated teacher feedback.html - 教師評語產生系統 (Teacher Comment Generation System)
A comprehensive teacher evaluation system featuring:
- **Six Assessment Dimensions**: Class attitude, exam scores, note-taking, peer relationships, self-directed learning
- **Automated Comment Generation**: Personalized student feedback based on scoring (0-5 scale)
- **Multiple Comment Styles**: Three different writing styles with encouraging/neutral tone options
- **Visual Analytics**: Radar chart showing student capabilities across dimensions
- **Workflow Optimization**: Streamlined teacher evaluation process with copy-to-clipboard functionality
- **Professional Interface**: Clean design with responsive layout for efficient use

### 📋 Student_survey_form.js
A Google Apps Script for automated survey creation featuring:
- **Purpose**: Creates "期末自然探究學習調查" (Final Natural Science Inquiry Learning Survey)
- **Survey Content**: 46-question survey covering:
  - Scientific epistemology and beliefs about scientific knowledge
  - Students' attitudes toward scientific inquiry processes
  - Self-efficacy in scientific investigation skills
  - Impact of generative AI tools on learning and research
- **Automation Features**:
  - Automatic Google Form creation with predefined questions
  - Integrated Google Sheets for response collection
  - 5-point Likert scale questions (1=strongly disagree, 5=strongly agree)
  - Form reuse detection (edits existing form if found)
- **Educational Research**: Designed for assessing student perspectives on science learning and AI integration

### 👾 Pixel_art_editor.html
A web app for creating pixel figures:
- **Purpose**: Draw or upload your pixel artifacts. You can output them into PNG or HTML/CSS codes

## Technologies Used
- **Web Technologies**: Pure HTML5, CSS3, and JavaScript (ES6+)
- **Visualization**: Chart.js for data visualization and radar charts
- **Export**: jsPDF and html2canvas for PDF generation and reporting
- **Data Persistence**: Local Storage API for configuration and data retention
- **Automation**: Google Apps Script (FormApp, SpreadsheetApp, DriveApp)
- **Design**: Responsive design with CSS Grid, Flexbox, and modern UI principles
- **Localization**: Traditional Chinese interface and content with English variants

## Purpose
This collection serves as comprehensive educational and research tools for:
- **Statistical Education**: Interactive demonstrations of statistical concepts and calculations
- **Qualitative Research**: Advanced text coding, annotation, and analysis workflows
- **Teacher Tools**: Automated evaluation systems and personalized feedback generation
- **Data Visualization**: Multi-dimensional relationship analysis and interactive charts
- **Educational Research**: Survey automation and data collection for academic studies
- **Scientific Epistemology**: AI impact research and student learning assessment
- **Web-based Education**: Interactive tools for classroom and research environments
