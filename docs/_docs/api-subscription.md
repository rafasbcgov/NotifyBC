---
layout: docs
title: Subscription API
permalink: /docs/api-subscription/
---

## Model Schema
The API operates on following subscription data model fields: 
<table>
  <tr>
    <th>Name</th>
    <th>Attributes</th>
  </tr>
  <tr>
    <td>
      <p class="name">id</p>
      <p class="description">subscription id</p>
    </td>
    <td>
      <table>
        <tr><td>type</td><td>number</td></tr>
        <tr><td>auto-generated</td><td>true</td></tr>
      </table>
    </td>
  </tr>
  <tr>
    <td>
      <p class="name">serviceName</p>
      <p class="description">name of the service</p>
    </td>
    <td>
      <table>
        <tr><td>type</td><td>string</td></tr>
        <tr><td>required</td><td>true</td></tr>
      </table>
    </td>
  </tr>
  <tr>
    <td>
      <p class="name">channel</p>
      <p class="description">name of the delivery channel. Valid values: email, sms.</p>
    </td>
    <td>
      <table>
        <tr><td>type</td><td>string</td></tr>
        <tr><td>required</td><td>true</td></tr>
        <tr><td>default</td><td>email</td></tr>
      </table>
    </td>
  </tr>
  <tr>
    <td>
      <p class="name">userChannelId</p>
      <p class="description">user's delivery channel id, for example, email address</p>
    </td>
    <td>
      <table>
        <tr><td>type</td><td>string</td></tr>
        <tr><td>required</td><td>true</td></tr>
      </table>
    </td>
  </tr>
  <tr>
    <td>
      <p class="name">state</p>
      <p class="description">state of subscription. Valid values: unconfirmed, confirmed, deleted</p>
    </td>
    <td>
      <table>
        <tr><td>type</td><td>string</td></tr>
        <tr><td>required</td><td>true</td></tr>
        <tr><td>default</td><td>unconfirmed</td></tr>
      </table>
    </td>
  </tr>
  <tr>
    <td>
      <p class="name">userId</p>
      <p class="description">user id. Auto-populated from SiteMinder header for SiteMinder authenticated user requests.</p>
    </td>
    <td>
      <table>
        <tr><td>type</td><td>string</td></tr>
        <tr><td>required</td><td>false</td></tr>
      </table>
    </td>
  </tr>
  <tr>
    <td>
      <p class="name">created</p>
      <p class="description">date and time of creation</p>
    </td>
    <td>
      <table>
        <tr><td>type</td><td>date</td></tr>
        <tr><td>required</td><td>false</td></tr>
        <tr><td>default</td><td>$now</td></tr>
      </table>
    </td>
  </tr>
  <tr>
    <td>
      <p class="name">confirmationRequest</p>
      <div class="description">an object containing these child fields
        <ul>
          <li>
            <div class="name">
              confirmationCodeRegex
            </div> 
            <ul>
              <li>type: string</li>
              <li>regular expression used to generate confirmation code
              </li>
            </ul>
          </li>
          <li>
            <div class="name">
              confirmationCodeEncrypted
            </div> 
            <ul>
              <li>type: string</li>
              <li>encrypted confirmation code
              </li>
            </ul>
          </li>
          <li>
            <div class="name">
              sendRequest
            </div> 
            <ul>
              <li>type: boolean</li>
              <li>
                whether to send confirmation request
              </li>
            </ul>
          </li>
          <li>
            <div class="name">
              from, subject, textBody, htmlBody
            </div> 
            <ul>
              <li>type: string</li>
              <li>
                these are email template fields used for sending email confirmation request. If confirmationRequest.sendRequest is true and channel is email, then these fields should be supplied in order to send confirmation email.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </td>
    <td>
      <table>
        <tr><td>type</td><td>object</td></tr>
        <tr><td>required</td><td>false</td></tr>
      </table>
    </td>
  </tr>
</table>

## GET Subscriptions
```
GET /subscriptions
```
* inputs 
  * a filter defining fields, where, include, order, offset, and limit
    * parameter name: filter
    * required: false
    * parameter type: query
    * data type: object
* outputs
  * for admin requests, returns unabridged subscription data matching the filter
  * for user requests, in addition to filter, following constraints are imposed: 
    * only non-deleted subscriptions 
    * only subscriptions created by the user 
    * the *confirmationRequest* field is removed. 

## Create a Subscription
```
POST /subscriptions
```
* inputs
  * an object containing subscription data model fields. At a minimum all required fields that don't have a default value must be supplied. Id field should be omitted since it's auto-generated.
    * parameter name: data
    * required: true
    * parameter type: body
    * data type: object
* outputs

## Update a Subscription

## Verify a Confirmation Code
