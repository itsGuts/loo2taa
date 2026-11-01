#!/usr/bin/env node

/**
 * LO2TAA - 10-Minute Continuous Local Tracker Daemon
 * 
 * Runs the price tracker immediately and repeats every 10 minutes.
 * Perfect for running in a background terminal on your local machine.
 */

import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TRACKER_SCRIPT = path.join(__dirname, 'tracker.mjs');
const INTERVAL_MINUTES = 10;
const INTERVAL_MS = INTERVAL_MINUTES * 60 * 1000;

console.log(`\n=================================================`);
console.log(`⚡ LO2TAA Local Watcher Daemon Active`);
console.log(`⏱️ Schedule: Checking Amazon.eg every ${INTERVAL_MINUTES} minutes`);
console.log(`💡 Press Ctrl+C anytime to stop`);
console.log(`=================================================\n`);

let isRunning = false;

function runTracker() {
  if (isRunning) {
    console.log(`⚠️ Previous check still running. Skipping overlap...`);
    return;
  }

  isRunning = true;
  const now = new Date().toLocaleTimeString('ar-EG');
  console.log(`\n[${now}] 🔄 Starting 10-minute deals scan...`);

  const child = spawn(process.execPath, [TRACKER_SCRIPT], { stdio: 'inherit' });

  child.on('close', (code) => {
    isRunning = false;
    const nextTime = new Date(Date.now() + INTERVAL_MS).toLocaleTimeString('ar-EG');
    console.log(`\n⏳ Scan complete. Next check scheduled at: ${nextTime} (${INTERVAL_MINUTES} minutes)\n`);
  });

  child.on('error', (err) => {
    isRunning = false;
    console.error(`❌ Tracker failed to spawn:`, err.message);
  });
}

// Run first check immediately
runTracker();

// Schedule repeat every 10 minutes
setInterval(runTracker, INTERVAL_MS);
