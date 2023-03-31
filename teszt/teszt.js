QUnit.module("tesztestek", function () {
  QUnit.test("Létezik e a függvény", function (assert) {
    assert.ok(
      masodfokuEgyenletMegoldasa,
      "Létezik a masodfokuEgyenletMegoldasa"
    );
  });
  QUnit.test("Függvény e?", function (assert) {
    assert.ok(typeof masodfokuEgyenletMegoldasa === "function", "Függvény");
  });

  QUnit.test("1. teszteset:", function (assert) {
    assert.deepEqual(masodfokuEgyenletMegoldasa(1, 4, 4), {
      X1: -2,
      X2: -2,
    });
  });
  QUnit.test("2. teszteset:", function (assert) {
    assert.deepEqual(masodfokuEgyenletMegoldasa(4, 4, 4), {
      X1: "Nem egy szám",
      X2: "Nem egy szám",
    });
  });
  QUnit.test("3. teszteset:", function (assert) {
    assert.deepEqual(masodfokuEgyenletMegoldasa(0, 4, 4), {
      X1: "Nem egy szám",
      X2: "- végtelen",
    });
  });
  QUnit.test("4. teszteset:", function (assert) {
    assert.deepEqual(masodfokuEgyenletMegoldasa(0, 0, 0), {
      X1: "Nem egy szám",
      X2: "Nem egy szám",
    });
  });
  QUnit.test("5. teszteset:", function (assert) {
    assert.deepEqual(masodfokuEgyenletMegoldasa(4, 1, 4), {
        X1: "Nem egy szám",
        X2: "Nem egy szám",
    });
  });
  QUnit.test("6. teszteset:", function (assert) {
    assert.deepEqual(masodfokuEgyenletMegoldasa(2, 4, 2), {
      X1: -1,
      X2: -1,
    });
  });
  QUnit.test("7. teszteset:", function (assert) {
    assert.deepEqual(masodfokuEgyenletMegoldasa(2, 0, 2), {
        X1: "Nem egy szám",
        X2: "Nem egy szám",
    });
  });
  QUnit.test("8. teszteset:", function (assert) {
    assert.deepEqual(masodfokuEgyenletMegoldasa(2, 4, 0), {
      X1: 0,
      X2: -2,
    });
  });
  QUnit.test("9. teszteset:", function (assert) {
    assert.deepEqual(masodfokuEgyenletMegoldasa(0, 0, 2), {
        X1: "Nem egy szám",
        X2: "Nem egy szám",
    });
  });
  QUnit.test("10. teszteset:", function (assert) {
    assert.deepEqual(masodfokuEgyenletMegoldasa(0, 4, 0), {
        X1: "Nem egy szám",
        X2: "- végtelen",
    });
  });
  QUnit.test("11. teszteset:", function (assert) {
    assert.deepEqual(masodfokuEgyenletMegoldasa(2, 0, 0), {
        X1: 0,
        X2: 0,
    });
  });
  QUnit.test("12. teszteset:", function (assert) {
    assert.deepEqual(masodfokuEgyenletMegoldasa(-1, 4, 1), {
        X1: -0.2360679774997898,
        X2: 4.23606797749979,
    });
  });
  QUnit.test("13. teszteset:", function (assert) {
    assert.deepEqual(masodfokuEgyenletMegoldasa(2, -4, 5), {
        X1: "Nem egy szám",
        X2: "Nem egy szám",
    });
  });
  QUnit.test("14. teszteset:", function (assert) {
    assert.deepEqual(masodfokuEgyenletMegoldasa(2, 8, -1), {
        X1: 0.12132034355964239,
        X2: -4.121320343559642,
    });
  });
  QUnit.test("15. teszteset:", function (assert) {
    assert.deepEqual(masodfokuEgyenletMegoldasa(-2, -6, 1), {
        X1: -3.1583123951777,
        X2: 0.1583123951776999,
    });
  });
  QUnit.test("16. teszteset:", function (assert) {
    assert.deepEqual(masodfokuEgyenletMegoldasa(-5, 4, -8), {
        X1: "Nem egy szám",
        X2: "Nem egy szám",
    });
  });
  QUnit.test("17. teszteset:", function (assert) {
    assert.deepEqual(masodfokuEgyenletMegoldasa(5, -2, -8), {
        X1: 1.4806248474865698,
        X2: -1.0806248474865696,
    });
  });
  QUnit.test("18. teszteset:", function (assert) {
    assert.deepEqual(masodfokuEgyenletMegoldasa(-6, -4, -3), {
        X1: "Nem egy szám",
        X2: "Nem egy szám",
    });
  });
});
