---
title: lipu pi jaki ala
---

# lipu pi jaki ala (anu: lipu pi nasin pona)

toki! mi wile pana e nasin pona pi pali lipu tawa sina. mi lukin e lipu mute pi ilo sona. taso mute la mi o lukin mute
e lipu la mi ken sona e ona. pini la lipu mi kin li jaki. taso mi pona e nasin mi. mi wile pona e nasin sina kin! :)

## tan seme la sina o pona e lipu sina?

tan mute li lon:
- lon tenpo kama la sina wile lukin e lipu sina. taso tenpo kama la sina jo ala e sona sina tan tenpo *ni* la sina
  kepeken tenpo mute tawa kama sona e lipu.
- jan ante li wile lukin kin a! ona li jo ala e sona sina.
- sina ken ante e pali sina kepeken wawa lili.
- lukin li kama pona :D

## o toki e tan

mi lukin e ni lon tenpo mute:

```kt
// mi pana e ijo tawa nasin `save`.
save(obj);
```

taso ni li pona ala. mi lukin e ni la mi ken ala kama sona e tan. mi pana e ijo tawa nasin *tan seme*? nasin `save` li
pali e *seme*? toki ni li lon la sina ken sona e lipu ni la sina wile kepeken tenpo mute. taso, o lukin e ni:

```kt
// mi pana tan ni: tenpo kama la mi ken kama jo e nanpa ni.
save(obj);
```

ni li pona. mi ken kama sona e tan kepeken tenpo lili. taso, sina ken awen pona e ni!

## o pona e nimi nasin

nasin `save` li awen e ijo. taso tan seme? tawa seme? ona li pana e nanpa tawa poki anu seme? tawa ilo poki anu seme?
mi sona la mi o lukin e lipu nasin. taso mi ken pona e nimi la mi ken kama sona kepeken ala lipu nasin.

```kt
persistToDB(obj);
```

ni la sina ken lukin e ni la sina sona e ni: mi pana e ijo tawa ilo poki a! kin la, mi ken weka e toki.

ni li suli a! o pali e lipu kepeken nasin ni: nimi li wile toki mute. mi wile pana e lipu mi tawa sina. taso lipu ni la
mi ante e nimi tawa nimi lili.

```js
const i = n.getInterface('Input').value;
if (!i) {
    n.getInterface('Output').value = null;
    return;
}

const g = n.getOptionValue('Greyscale values');
const c = bw(image.maxValue, g);

n.getInterface('Output').value = ri(i, c);
```

sina ken ala sona e ni. nimi i li sama nimi `Input` anu seme? nimi g en nimi c li seme? mi toki ala e tan pi
lipu ni tawa sina la sina ken ala sona e ni. taso, tenpo ni la mi pana e lipu sama tawa sina kepeken nimi pona.

```js
const image = node.getInterface('Input').value;
if (image === null) {
    node.getInterface('Output').value = null;
    return;
}

const greyCount = node.getOptionValue('Greyscale values');
const maxPixelValue = image.maxValue;
const colorSet = createBWSet(maxPixelValue, greyCount);

const result = reduceImageColors(image, colorSet);
node.getInterface('Output').value = result;
```

tenpo ni la sina ken sona mute e ni! lili la sina awen sona ala. taso sina lukin e ni la sina ken kama sona mute.

- mi kama jo e sitelen.
- nimi g li mute pi pimeja walo.
- nimi c li pali e kulupu kule sin tan mute ona tan suli pi kipisi sitelen.
- mi pana e poki sin e nimi `result`. ona li kama jo e sitelen pi kule lili.
  - pali pi nasin `reduceImageColors` la sina sona ala. sina *ken* pona e ni, taso kin la sina ken awen e ni li pana e
    toki tawa sewi pi nasin ona.
- mi pana e pali tawa ante.

taso, nimi ni li lon toki Inli tan seme?

## o alasa kepeken toki Inli

jan mute li pilin ike tan ni. ona li ken ala toki Inli li wile kepeken toki ona. taso o lukin e ni:

```js
const bild = knoten.getInterface('Eingabe').value;
if (bild === null) {
    return;
}

const anzahlGrauAbstufungen = knoten.getOptionValue('Grauabstufungen');
const maximalerPixelWert = image.maxValue;
const farbListe = erstelleSchwarzWeissListe(maximalerPixelWert, anzahlGrauAbstufungen);

const ergebnis = reduziereBildFarben(bild, farbListe);
knoten.getInterface('Ausgabe').value = ergebnis;
```

sina ken ala toki Tosi la sina ken ala sona e ni. kin la toki Inli li awen lon lipu ni! mi ken ala pana e nimi pi toki
Tosi tawa ijo ale tan ni: ijo mute li tan lipu ante. mi ken ala ante e ijo ni. ni la, toki *tu* li lon lipu ni. jan mute
li pali e lipu sona li ken toki Inli. sina wile kama sona tan jan ante la ona li ken ala toki kepeken toki sina la sina
o toki ante e lipu sina. ni li ike.

taso, sina *ken* kepeken toki sina lon tenpo ni:
- sina wile pana sona tawa jan ante kepeken toki sina.
- sina ken ala toki Inli.

mi la tan ante li lon ala. sina pali e lipu sona tawa ala jan ante la o kepeken toki Inli kin! ken la sina pana e lipu
tawa jan ante li toki lon lipu tawa jan ante.

taso, ni li tan suli pi nanpa wan: lipu pi pana sona li kepeken toki Inli kin! lon lipu ni la mi kepeken e kulupu lipu
`BaklavaJS`. mi ken ala sona e toki Inli la mi ken ala kepeken ona. kulupu lipu suli la lipu ken lon toki ante. taso
mute la ni li lon ala.

## o Hadouken ala!

o ni ala:

<img src="/img/tok/lipu-pi-jaki-ala/hadouken.png" alt="lipu ni li jo e sitelen walo mute. jan li toki e 'Hadouken'." width="500" />

sina ken kepeken e nasin "o pini mute". ni li lipu ike:

```ts
function isTextValid(text: string) {
    if (text.length > 0) {
        if (text.length < 255) {
            if (!text.includes('jaki')) {
                if (!text.includes('ike')) {
                    if (text.includes('pona')) {
                        return true;
                    }
                }
            }
        }
    }
    
    return false;
}
```

sina ken pona e ni kepeken nasin mute. ni li wan taso:

```ts
function isTextValid(text: string) {
    if (text.length == 0) return false;
    if (text.length >= 255) return false;
    if (text.includes('jaki')) return false;
    if (text.includes('ike')) return false;
    if (!text.includes('pona')) return false;
  
    return true;
}
```

o alasa e ni: pali li jo ala e walo tu wan lon open ona.

```ts
function foo() {
    if (condition) {
        // ni li pona.
    }
    
    if (condition1) {
        for (const element in list) {
            // ni li pona ala li ike ala.
            // o alasa weka e walo wan.
        }
    }
    
    if (condition1) {
        if (condition2) {
            if (condition3) {
                // ni li ike.
                // o weka e walo.
            }
        }
    }
}
```

## o lili e nasin sina

tenpo mute la, mi lukin e nasin suli suli. ona li jo e pali #500 la jan li ken ala sona. o lili e nasin sina! kin la sina
lili e nasin sina la sina pana e nimi pona tawa nasin lili la sina ken sona pona a! o lukin:

```c
int run_jit(compiler_t *compiler) {
    LLVMInitializeNativeTarget();
    LLVMInitializeNativeAsmParser();
    LLVMInitializeNativeAsmPrinter();

    LLVMLinkInMCJIT();

    struct LLVMMCJITCompilerOptions options;
    LLVMInitializeMCJITCompilerOptions(&options, sizeof(options));

    LLVMExecutionEngineRef jit;
    char *error;
    LLVMBool res = LLVMCreateMCJITCompilerForModule(
            &jit,
            compiler_get_module(compiler),
            &options,
            sizeof(options),
            &error
    );

    if (res) {
        fprintf(stderr, "Error creating JIT: %s\n", error);
        exit(1);
    }

    LLVMAddSymbol("foo", foo);
    LLVMAddSymbol("print_n", print_n);
    LLVMAddSymbol("print_d", print_d);

    int result = LLVMRunFunctionAsMain(jit, compiler_get_main(compiler), 0, NULL, NULL);

    if (!compiler_is_main_void(compiler)) {
        wprintf(L"Result: %d\n", result);
    }

    return result;
}
```

nasin ni li jo e pali #30. suli a! mi ken lili e ni:

```c
void init_natives() {
    LLVMInitializeNativeTarget();
    LLVMInitializeNativeAsmParser();
    LLVMInitializeNativeAsmPrinter();
}

LLVMExecutionEngineRef init_jit(compiler_t *compiler) {
    struct LLVMMCJITCompilerOptions options;
    LLVMInitializeMCJITCompilerOptions(&options, sizeof(options));

    LLVMExecutionEngineRef jit;
    char *error;
    LLVMBool creation_failed = LLVMCreateMCJITCompilerForModule(
            &jit,
            compiler_get_module(compiler),
            &options,
            sizeof(options),
            &error
    );

    if (creation_failed) {
        fprintf(stderr, "Error creating JIT: %s\n", error);
        exit(1);
    }
    
    return jit;
}

void add_test_symbols() {
    // These are symbols referenced in the test program. We have to tell LLVM to load the function address
    // from the dynamic linker, so the Pastel program can use them.
    LLVMAddSymbol("foo", foo);
    LLVMAddSymbol("print_n", print_n);
    LLVMAddSymbol("print_d", print_d);
}

int execute_jit_main(compiler_t *compiler, LLVMExecutionEngineRef jit) {
    int result = LLVMRunFunctionAsMain(jit, compiler_get_main(compiler), 0, NULL, NULL);

    bool should_print_result = !compiler_is_main_void(compiler);
    if (should_print_result) {
        wprintf(L"Result: %d\n", result);
    }

    return result;
}

int run_jit(compiler_t *compiler) {
    init_natives();
    
    LLVMExecutionEngineRef jit = init_jit(compiler);
    add_test_symbols();
    
    return execute_jit_main(compiler, jit);
}
```

lipu *ale* li suli. taso, lipu *nasin* li lili! mi lukin e nasin sin `run_jit` la mi kama sona e pali ona kepeken tenpo
lili. mi wile kama sona e pali pi nasin lili la mi ken lukin e ona. lon la, mi *ken* pona e ni. taso mi wile pana sona e
ken ni tawa sina.

nasin lili li pona tan ni:
- nasin li jo e selo. ona li ken awen e sina lon nasin la sina ken kama sona e nasin.
- nimi nasin li toki pona la sina ken sona e pali lon lukin ala!
- sina ken pali e ijo *wan* taso lon nasin ni.
- sina ken alasa e ike lon ni kepeken pali lili!

## o alasa e ike!

o alasa mute! sina wile sona e ni: nasin sina li pali e wile sina. lukin taso la sina ken sona e pali pona la sina ken
pali ala e alasa. taso mute la ike li lon nasin ni kin!

```js
function addNumbers(a, b) {
    return a + b;
}

const nameRegex = /^\w+$/;

function setName(newName) {
    const nameIsValid = nameRegex.test(newName);
    if (!nameIsValid) return;
    
    this.name = newName;
}
```

sina ken lukin e nasin `addNumbers` la sina sona e ni: pali li pona. taso nasin `setName` la ona li sama ala.

o kama sona e ni:
- nimi *seme* li pona? nimi *seme* li ike?
  - ni la nimi o jo e sitelen ni taso: `a-z`, `A-Z`, `0-9`, `_`. ni li pona ala pona?
- nimi li ike la nasin li pali e *seme*?
  - ni la nasin li pini pali taso. ni li pona ala pona? nasin o pana e toki "ni li ike!" anu seme?

sina ken pona e sona pali sina kepeken alasa:

```js
import { test } from 'uvu';
import * as assert from 'uvu/assert';

test('setName', () => {
    const obj = new MyCoolObject();
    
    assert.is(obj.setName('test'), 'test');
    assert.is(obj.setName('SarahIsWeird'), 'SarahIsWeird');
    assert.throws(obj.setName('Name with spaces'));
    assert.throws(obj.setName('name_with_underscores'));
    // ... o alasa e ijo mute!
});
```

mi toki e wile mi kepeken alasa ni. pini ni la mi *open* pali e nasin `setName`!

```js
const nameRegex = /^[a-zA-Z0-9]+$/;

function setName(newName) {
    const nameIsValid = nameRegex.test(newName);
    if (!nameIsValid) throw new Error('Invalid name!');
    
    this.name = newName;
    return newName;
}
```

## ijo ante

sina ken pona e lipu sina kepeken nasin mute. taso mi toki e ale tawa sina la ni li kama lipu suli. sina wile kama sona
e nasin mute la,
- o lukin e lipu `Clean Code: A Handbook of Agile Software Craftsmanship` tan jan Robert C. Martin.
- o lukin e [lipu ni](https://www.freecodecamp.org/news/clean-coding-for-beginners/) tan freecodecamp.org.
- o toki tawa mi! sina wile kama sona la mi wile pana sona a! :D
