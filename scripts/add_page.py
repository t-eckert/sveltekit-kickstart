#!/usr/bin/env python3
"""
Script to create a new page in the SvelteKit routes directory.
Uses templates from templates/page/ to generate the page files.
"""

from pathlib import Path

import argparse
import sys


def create_page(page_path: str, template_dir: Path, routes_dir: Path) -> None:
    """Create a new page from templates."""
    # Normalize the page path (remove leading/trailing slashes)
    page_path = page_path.strip("/")

    # Create the target directory
    target_dir = routes_dir / page_path
    target_dir.mkdir(parents=True, exist_ok=True)

    # Copy template files
    template_files = ["+layout.svelte", "+page.server.ts", "+page.svelte", "+page.ts"]

    for template_file in template_files:
        template_path = template_dir / template_file
        if template_path.exists():
            target_path = target_dir / template_file

            # Read template content
            with open(template_path, "r", encoding="utf-8") as f:
                content = f.read()

            # Write to target
            with open(target_path, "w", encoding="utf-8") as f:
                f.write(content)

            print(f"Created: {target_path}")
        else:
            print(f"Warning: Template {template_file} not found")


def main():
    parser = argparse.ArgumentParser(
        description="Create a new SvelteKit page from templates"
    )
    parser.add_argument(
        "path", help='Path for the new page (e.g., "about" or "blog/post")'
    )

    args = parser.parse_args()

    # Get script directory and project root
    script_dir = Path(__file__).parent
    project_root = script_dir.parent

    # Define paths
    template_dir = project_root / "templates" / "page"
    routes_dir = project_root / "src" / "routes"

    # Validate paths exist
    if not template_dir.exists():
        print(f"Error: Template directory not found: {template_dir}")
        sys.exit(1)

    if not routes_dir.exists():
        print(f"Error: Routes directory not found: {routes_dir}")
        sys.exit(1)

    try:
        create_page(args.path, template_dir, routes_dir)
        print(f"\nPage created successfully at: src/routes/{args.path}")
    except Exception as e:
        print(f"Error creating page: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()

