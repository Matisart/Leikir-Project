Spotler = (baseUrl, newContext) ->
    self                = this
    this._name          = null
    this._userGrid      = null
    this._fireBase      = null
    this._mainUser      = null
    this._fullName      = null
    this._searchHandler = null
    this._currentSearch = null

    # Every time we call firebaseRef.on, we need to remember to call .off,
    # when requested by the caller via unload(). We'll store our handlers
    # here so we can clear them later.
    this.handlers = []

    throw new Error 'Invalid baseUrl provided' if !baseUrl || typeof baseUrl != 'string'

    this._fireBase = new Firebase baseUrl, if newContext || false then new Firebase.Context() else null

    this._authHandlers = []
    this._fireBaseAuthClient = new FirebaseSimpleLogin this._fireBase
        , (error, user) ->
            self._onloginStateChange error, user

    console.log 'Oh! Yeah!'

# 
# Event Delegation
# 

$('#mouseHandler').on 'mouseover', 'div'
    , (e) ->
        event.preventDefault()
        event.stopPropagation()
        console.log 'Survol de ' + $(this).val class

$('form').on 'mouseover', 'button[type="submit"]'
    , (e) -> 
        event.preventDefault()
        event.stopPropagation()
        console.log 'Hover form button ok'

$('div').on 'mouseover', 'a[href^="http"]'
    , (e) ->
        event.preventDefault()
        event.stopPropagation()
        $(this).attr target: '_blank'
        console.log 'Hover div link ok'