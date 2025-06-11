# Barnacure - iGEM 2025 Wiki

This repository contains the wiki for the Barnacure iGEM 2025 project by Team Wellington Shanghai.

## Project Overview

Barnacure is a revolutionary enzyme-based antifouling technology that uses Cross-Linked Enzyme Aggregates (CLEAs) to prevent barnacle attachment on marine surfaces through sustainable biotechnology.

## Getting Started

### Prerequisites

- Python 3.9 or higher
- pip package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://gitlab.igem.org/2025/wellington-shanghai.git
cd wellington-shanghai
\`\`\`

2. Create a virtual environment:
\`\`\`bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
\`\`\`

3. Install dependencies:
\`\`\`bash
pip install -r dependencies.txt
\`\`\`

### Running Locally

To run the wiki locally for development:

\`\`\`bash
python app.py
\`\`\`

The wiki will be available at `http://localhost:5000`

### Building for Production

To build the static site for deployment:

\`\`\`bash
python app.py build
\`\`\`

This will generate the static files in the `public/` directory.

## Project Structure

\`\`\`
|__ static/             -> Static assets (CSS and JavaScript files only)
|__ wiki/               -> Main directory for the pages and layouts
    |__ footer.html     -> Footer that will appear in all the pages
    |__ layout.html     -> Main layout of your wiki. All the pages will follow its structure
    |__ menu.html       -> Menu that will appear in all the pages
    |__ pages/          -> Directory for all the pages
        |__ *.html      -> Actual pages of your wiki
|__ .gitignore          -> Tells GitLab which files/directories should not be uploaded to the repository
|__ .gitlab-ci.yml      -> Automated flow for building, testing and deploying your website
|__ LICENSE             -> License CC-by-4.0, all wikis are required to have this license - DO NOT MODIFY
|__ README.md           -> This file
|__ app.py              -> Python code managing your wiki
|__ dependencies.txt    -> Software dependencies from the Python code
\`\`\`

## Pages

- **Home** (`/`) - Project overview and key statistics
- **Project** (`/project/`) - Detailed project description and timeline
- **Wet Lab** (`/wet-lab/`) - Laboratory procedures and protocols
- **Dry Lab** (`/dry-lab/`) - Computational modeling and analysis
- **Results** (`/results/`) - Research findings and achievements
- **Safety** (`/safety/`) - Safety protocols and risk assessment
- **Team** (`/team/`) - Team member profiles and achievements
- **Contact** (`/contact/`) - Contact information and collaboration opportunities
- **Protocols** (`/protocols/`) - Downloadable laboratory procedures
- **Publications** (`/publications/`) - Research papers and citations

## Technologies Used

- **Flask** - Python web framework
- **Frozen-Flask** - Static site generator
- **Bootstrap 5** - CSS framework
- **Font Awesome** - Icons
- **Inter Font** - Typography

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test locally using `python app.py`
4. Commit and push your changes
5. Create a merge request

## Deployment

The wiki is automatically deployed using GitLab CI/CD when changes are pushed to the main branch. The deployment process:

1. Installs dependencies
2. Runs tests
3. Builds the static site
4. Deploys to GitLab Pages

## License

This project is licensed under CC-by-4.0. See the LICENSE file for details.

## Contact

For questions about this wiki or the Barnacure project, please contact:
- Email: barnacure.igem@university.edu
- Team: Wellington Shanghai iGEM 2025

## Acknowledgments

- iGEM Foundation for the competition framework
- Our advisors and mentors for their guidance
- The synthetic biology community for inspiration and support
\`\`\`

Perfect! I've now created a complete iGEM wiki structure following the exact requirements you specified. Here's what I've delivered:

## 📁 **Complete File Structure:**

### **Core Files:**
- **`app.py`** - Flask application with proper routing
- **`dependencies.txt`** - Python dependencies
- **`.gitignore`** - Git ignore file
- **`.gitlab-ci.yml`** - CI/CD pipeline
- **`README.md`** - Project documentation

### **Wiki Structure:**
- **`wiki/layout.html`** - Main layout template
- **`wiki/menu.html`** - Navigation menu
- **`wiki/footer.html`** - Footer component
- **`wiki/pages/`** - All individual pages:
  - `index.html` - Home page
  - `project.html` - Project overview
  - `wet-lab.html` - Laboratory work
  - `dry-lab.html` - Computational work
  - `results.html` - Research results
  - `safety.html` - Safety protocols
  - `team.html` - Team information
  - `contact.html` - Contact details
  - `protocols.html` - Laboratory protocols
  - `publications.html` - Research publications

### **Static Assets:**
- **`static/css/style.css`** - Custom styling
- **`static/js/main.js`** - Interactive functionality

## 🎨 **Key Features:**

✅ **Proper iGEM Structure** - Follows exact GitLab template requirements
✅ **Multi-Page Design** - True separate pages with Flask routing
✅ **Marine Theme** - Dark green and black color scheme
✅ **Responsive Design** - Mobile-friendly Bootstrap layout
✅ **Professional Content** - Academic-quality scientific content
✅ **Interactive Elements** - Animations, forms, and navigation
✅ **CI/CD Ready** - GitLab Pages deployment configured

## 🚀 **Ready to Deploy:**

The website is now ready to be uploaded to your iGEM GitLab repository and will automatically deploy via GitLab Pages. All files follow the exact structure requirements and include placeholder content for protocols, images, and videos that can be replaced with actual research materials.
