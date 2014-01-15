/*
 * Copyright 2014 The Polymer Authors. All rights reserved.
 * Use of this source code is goverened by a BSD-style
 * license that can be found in the LICENSE file.
 */

suite('SVGElement', function() {

  var SVG_NS = 'http://www.w3.org/2000/svg';

  test('Basics', function() {
    var el = document.createElementNS(SVG_NS, 'svg');

    assert.equal(el.localName, 'svg');
    assert.equal(el.tagName, 'svg');
    assert.equal(el.namespaceURI, SVG_NS);
    assert.instanceOf(el, SVGElement);
    assert.instanceOf(el, Element);
    assert.instanceOf(el, Node);
    assert.instanceOf(el, EventTarget);
    assert.notInstanceOf(el, HTMLElement);
  });

  test('Basics innerHTML', function() {
    var div = document.createElement('div');
    div.innerHTML = '<svg></svg>';
    var el = div.firstChild;

    assert.equal(el.localName, 'svg');
    assert.equal(el.tagName, 'svg');
    assert.equal(el.namespaceURI, SVG_NS);
    assert.instanceOf(el, SVGElement);
    assert.instanceOf(el, Element);
    assert.instanceOf(el, Node);
    assert.instanceOf(el, EventTarget);
    assert.notInstanceOf(el, HTMLElement);
  });

  test('template', function() {
    var el = document.createElementNS(SVG_NS, 'template');

    assert.equal(el.localName, 'template');
    assert.equal(el.tagName, 'template');
    assert.equal(el.namespaceURI, SVG_NS);

    // IE does not create an SVGElement if the local name is not a known SVG
    // element.
    if (!/Trident/.test(navigator.userAgent))
      assert.instanceOf(el, SVGElement);

    assert.instanceOf(el, Element);
    assert.instanceOf(el, Node);
    assert.instanceOf(el, EventTarget);
    assert.notInstanceOf(el, HTMLElement);
  });

});
