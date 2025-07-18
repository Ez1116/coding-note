# Obsidian Canvas Workflow Generator Prompt

## Instructions for Claude

When I ask you to create an Obsidian Canvas workflow, please generate a JSON file following this exact structure and format. The workflow can be organized in different layout modes depending on the content type.

## Layout Modes

### Sequential Mode
- **Use for**: Step-by-step processes, workflows, phases with clear progression
- **Features**: Connected steps, phase groupings, logical flow
- **Example**: Project development workflow, research methodology

### Categorical Mode
- **Use for**: Independent concepts, classifications, reference materials
- **Features**: Standalone blocks, minimal connections, topic-based organization
- **Example**: Concept maps, taxonomies, knowledge frameworks

### Hybrid Mode
- **Use for**: Mixed content with both sequential and categorical elements
- **Features**: Combines both approaches in a single canvas
- **Example**: Scientific inquiry framework with supporting theories

## Template Structure

```json
{
    "nodes": [
        // Group nodes for phases
        // Text nodes for individual steps
    ],
    "edges": [
        // Connections between steps
    ]
}
```

## Node Types and Properties

### Group Nodes

#### Phase Groups (Sequential Mode)
```json
{
    "id": "phase-group-id",
    "type": "group",
    "x": -360,
    "y": 640,
    "width": 2000,
    "height": 850,
    "label": "Phase Name: Description (Tool/Context)"
}
```

#### Category Groups (Categorical Mode)
```json
{
    "id": "category-group-id",
    "type": "group",
    "x": -360,
    "y": 640,
    "width": 1280,
    "height": 440,
    "label": "Category Name: Description"
}
```

#### Topic Groups (Hybrid Mode)
```json
{
    "id": "topic-group-id",
    "type": "group",
    "x": -360,
    "y": 640,
    "width": 2480,
    "height": 1120,
    "label": "Topic Name: Description"
}
```

### Text Nodes

#### Sequential Steps
```json
{
    "id": "step-id",
    "type": "text",
    "text": "## Step Title\n\nStep description and details\n• Bullet points for specifics\n• Additional guidelines",
    "x": 273,
    "y": 660,
    "width": 684,
    "height": 330,
    "color": "3"
}
```

#### Categorical Blocks
```json
{
    "id": "block-id",
    "type": "text",
    "text": "## Category Title\n\n**• Key Point 1**: Description\n**• Key Point 2**: Description\n**• Key Point 3**: Description",
    "x": -280,
    "y": 680,
    "width": 1120,
    "height": 360,
    "color": "3"
}
```

#### Independent Concept Nodes
```json
{
    "id": "concept-id",
    "type": "text",
    "text": "## Concept Name\n\n• Definition or explanation\n• Key characteristics\n• Related information",
    "x": -278,
    "y": -760,
    "width": 400,
    "height": 380,
    "color": "1"
}
```

## Layout Guidelines

### Sequential Mode Layout

#### Phase Positioning
- **Phase 1**: x=-335, y=-80, width=1677, height=480
- **Phase 2**: x=-360, y=640, width=2000, height=850

#### Step Positioning Pattern
- **Phase 1 Steps**: y=-40, evenly spaced horizontally
- **Phase 2 Steps**: y=660 (first row), y=1110 (second row)
- **Width**: 375-785 pixels depending on content
- **Height**: 160-380 pixels depending on content

#### Step Spacing
- Horizontal spacing: ~350-450 pixels between steps
- First step x position: -335 to -253
- Subsequent steps: increment by ~400-500 pixels

### Categorical Mode Layout

#### Category Group Positioning
- **Single Category**: x=-360, y=640, width=1280, height=440
- **Multiple Categories**: Stack vertically with ~100px spacing

#### Block Positioning Pattern
- **Wide blocks**: width=1120, height=360 for comprehensive content
- **Narrow blocks**: width=400, height=380 for focused concepts
- **Grid layout**: 2-3 blocks per row, evenly spaced

#### Block Spacing
- Horizontal spacing: ~480-600 pixels between blocks
- Vertical spacing: ~450-500 pixels between rows
- Margin from group edge: ~80-100 pixels

### Hybrid Mode Layout

#### Multi-Section Positioning
- **Primary section**: x=-360, y=-800, width=2480, height=1120
- **Secondary section**: x=-360, y=640, width=1280, height=440
- Vertical spacing between sections: ~320px

#### Mixed Content Spacing
- Sequential elements: Follow sequential spacing rules
- Categorical elements: Follow categorical spacing rules
- Maintain visual hierarchy between different content types

## Color Coding System

### Sequential Mode Colors
- **Color 1**: Initial/Setup steps
- **Color 2**: Navigation/Preparation
- **Color 3**: Core planning/initialization
- **Color 4**: Development/Implementation
- **Color 5**: Documentation/Backup
- **Color 6**: Advanced/Complex tasks

### Categorical Mode Colors
- **Color 1**: Primary concepts/definitions
- **Color 2**: Secondary concepts/classifications
- **Color 3**: Core frameworks/models
- **Color 4**: Applications/examples
- **Color 5**: References/supporting material
- **Color 6**: Advanced/specialized topics

### Hybrid Mode Colors
- Use sequential colors for workflow elements
- Use categorical colors for reference/concept blocks
- Maintain visual distinction between different content types

## Edge Connections

### Sequential Mode Connections
```json
{
    "id": "connection-id",
    "fromNode": "step1-id",
    "fromSide": "right",
    "toNode": "step2-id",
    "toSide": "left",
    "color": "5"
}
```

### Categorical Mode Connections
- **Minimal connections**: Only when there's a clear relationship
- **Optional connections**: Use sparingly to avoid visual clutter
- **Relationship types**: Semantic connections, not sequential flow

### Hybrid Mode Connections
- **Within sequential sections**: Full connections as per sequential mode
- **Within categorical sections**: Minimal connections as per categorical mode
- **Cross-section connections**: Use only for critical relationships

## Content Guidelines

### Step Content Format
- **Title**: ## Step Title
- **Description**: Clear, concise explanation
- **Details**: Bullet points with • character
- **Commands**: Use backticks for code/commands
- **Notes**: Include context or warnings

### Content Organization

#### Sequential Mode Organization
- **Phase 1**: Planning, structure, preparation
- **Phase 2**: Implementation, execution, refinement
- **Additional phases**: As needed for complex workflows

#### Categorical Mode Organization
- **Group by theme**: Related concepts together
- **Group by hierarchy**: Main concepts with subcategories
- **Group by function**: Similar purposes or applications

#### Hybrid Mode Organization
- **Primary framework**: Sequential process or methodology
- **Supporting categories**: Reference materials, classifications, theories

## Example Usage Request Format

### Sequential Mode Request
"Create an Obsidian Canvas workflow for [WORKFLOW_TYPE] with these phases:
- Phase 1: [PHASE_1_DESCRIPTION]
- Phase 2: [PHASE_2_DESCRIPTION]

Steps should include:
1. [STEP_1_DESCRIPTION]
2. [STEP_2_DESCRIPTION]
3. [STEP_3_DESCRIPTION]
..."

### Categorical Mode Request
"Create an Obsidian Canvas for [TOPIC_NAME] with these categories:
- Category 1: [CATEGORY_1_DESCRIPTION]
- Category 2: [CATEGORY_2_DESCRIPTION]

Each category should include:
- [CONCEPT_1]: [DESCRIPTION]
- [CONCEPT_2]: [DESCRIPTION]
- [CONCEPT_3]: [DESCRIPTION]
..."

### Hybrid Mode Request
"Create an Obsidian Canvas for [TOPIC_NAME] combining:
- Sequential framework: [FRAMEWORK_NAME]
- Supporting categories: [CATEGORY_1], [CATEGORY_2]

The framework should include [STEPS_DESCRIPTION]
The categories should cover [CONCEPTS_DESCRIPTION]"

## Variable Placeholders for Customization

When creating a new workflow, replace these variables:
- `[WORKFLOW_TYPE]`: The type of workflow (e.g., "API Development", "Data Analysis")
- `[PHASE_NAME]`: Name of each phase
- `[TOOL_CONTEXT]`: Relevant tools or context for each phase
- `[STEP_TITLE]`: Title of each step
- `[STEP_DESCRIPTION]`: Detailed description of what to do
- `[STEP_DETAILS]`: Specific instructions, commands, or considerations

## Generation Rules

### Sequential Mode Rules
1. **Include 1-3 phases** (groups) as needed
2. **4-8 steps total** across all phases
3. **Sequential connections** between related steps
4. **Appropriate color coding** based on step type
5. **Proper positioning** following sequential layout
6. **Markdown formatting** within text nodes
7. **Unique IDs** for all nodes and edges

### Categorical Mode Rules
1. **Include 1-4 categories** (groups) as needed
2. **3-12 concept blocks** across all categories
3. **Minimal connections** only where relationships exist
4. **Appropriate color coding** based on concept type
5. **Proper positioning** following categorical layout
6. **Markdown formatting** within text nodes
7. **Unique IDs** for all nodes and edges

### Hybrid Mode Rules
1. **Combine sequential and categorical elements**
2. **Flexible node count** based on content complexity
3. **Mixed connection approach** appropriate to content type
4. **Consistent color coding** within each section
5. **Proper positioning** following hybrid layout
6. **Clear visual hierarchy** between different content types
7. **Unique IDs** for all nodes and edges

## Output Format

Provide the complete JSON structure ready to be saved as a .canvas file in Obsidian.