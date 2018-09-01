// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let webhook_input = document.getElementById('webhook');

chrome.storage.sync.get('webhook', function(data) {
  webhook_input.value = data.webhook
  
});

let button = document.getElementById('save');
button.addEventListener('click', function() {
  chrome.storage.sync.set({webhook: webhook_input.value}, function() {
    console.log('New webhook: ' + webhook_input.value);
  })
})
