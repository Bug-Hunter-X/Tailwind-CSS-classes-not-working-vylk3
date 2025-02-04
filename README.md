# Tailwind CSS Classes Not Applying

This repository demonstrates a common issue encountered when using Tailwind CSS: classes not being applied to elements despite seemingly correct configuration. The problem is often caused by the absence of correct purge configuration or problems with build process.

## Bug Report

The `bug.js` file shows a basic Tailwind CSS setup and usage, where the `bg-gray-100`, `p-4`, `text-xl`, and `font-bold` classes should apply styling, but do not work as expected in the HTML file.

## Solution

The `bugSolution.js` file demonstrates the corrected setup. This version includes a proper purge configuration and build process that ensures that the unused css are purged out.